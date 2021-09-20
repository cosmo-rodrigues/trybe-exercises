import requests
from parsel import Selector


url_1 = "https://www.jornalcontabil.com.br/codigo-dos-bancos"
url_2 = "-lista-atualizada-com-todos-os-bancos-brasileiros/"
url = url_1 + url_2
response = requests.get(url)
selector = Selector(text=response.text)

lista = []
for table in selector.xpath(
    '//*[@id="post-163389"]/div[4]/figure[1]/table/tbody'
):
    title = table.xpath("//tr").getall()
    for bacno in title:
        print("BANCO: \n", bacno)
