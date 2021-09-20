import requests
from parsel import Selector

response = requests.get("https://www.tecmundo.com.br/novidades")
selector = Selector(text=response.text)
news_page = selector.xpath('//*[@id="js-main"]/div/div/div[1]/div[2]').getall()
print("OAGE: \n", news_page)
