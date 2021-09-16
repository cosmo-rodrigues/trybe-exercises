from time import sleep
import requests

from parsel import Selector

url_base = "https://www.ufc.com.br"
url_fighter = "div.views-row a::attr(href)"
nick_name = "div.field-name-nickname"

request = requests.get("https://www.ufc.com.br/rankings")
selector = Selector(text=request.text)
for fighter in selector.css(url_fighter).getall():
    fighter_click = requests.get(url_base + fighter)
    fighter_clicked = Selector(text=fighter_click.text)
    fighter_nick = fighter_clicked.css(nick_name).get()
    print("Nick: \n", fighter_nick)
    sleep(3)
