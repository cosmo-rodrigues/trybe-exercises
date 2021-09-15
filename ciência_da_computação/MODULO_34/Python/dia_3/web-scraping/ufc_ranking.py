import requests

from parsel import Selector

request = requests.get("https://www.ufc.com.br/rankings")
selector = Selector(text=request.text)
print(selector.data)
