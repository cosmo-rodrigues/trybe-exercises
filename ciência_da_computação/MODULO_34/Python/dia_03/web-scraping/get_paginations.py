from parsel import Selector
import requests


URL_BASE = "http://books.toscrape.com/catalogue/"
# Define a primeira página como próxima a ter seu conteúdo recuperado
next_page_url = "page-1.html"
list_of_books = []
while next_page_url:
    # Busca o conteúdo da próxima página
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)
    for product in selector.css(".product_pod"):
        # Busca e extrai o título e  o preço
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".product_price .price_color::text").re(
            r"£\d+\.\d{2}"
        )

        # Busca o detalhe de um produto
        detail_href = product.css("h3 a::attr(href)").get()
        detail_page_url = URL_BASE + detail_href

        # Baixa o conteúdo da página de detalhes
        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)

        # Extrai a descrição do produto
        description = detail_selector.css(
            "#product_description ~ p::text"
        ).get()
        suffix = "...more"
        if description.endswith(suffix):
            description = description[: -len(suffix)]
        product = {"title": title, "price": price, "description": description}
        list_of_books.append(product)

    # Descobre qual é a próxima página
    next_page_url = selector.css(".next a::attr(href)").get()


print("list_of_books: \n", list_of_books)
