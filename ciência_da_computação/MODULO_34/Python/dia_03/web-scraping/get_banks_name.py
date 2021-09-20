from bs4 import BeautifulSoup
import requests

# from parsel import Selector


url_1 = "https://www.jornalcontabil.com.br/codigo-dos-bancos"
url_2 = "-lista-atualizada-com-todos-os-bancos-brasileiros/"
url = url_1 + url_2
response = requests.get(url)
site = BeautifulSoup(response.text, "html.parser")

banks_list = site.select("tbody tr")

result = []
for bank in banks_list:
    print("Banco: \n", bank.text, "\n\n")
