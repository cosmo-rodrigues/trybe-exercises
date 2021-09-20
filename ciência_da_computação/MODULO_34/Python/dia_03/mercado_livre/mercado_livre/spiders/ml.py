import scrapy


class MlSpider(scrapy.Spider):
    name = "ml"
    start_urls = ["https://lista.mercadolivre.com.br/instrumentos"]

    def parse(self, response, **kwargs):
        for item in response.xpath("//li[@class='ui-search-layout__item']"):
            price = item.xpath(
                ".//span[@class='price-tag-text-sr-only']//text()"
            ).getall()
            title = item.xpath(
                ".//h2[@class='ui-search-item__title']//text()"
            ).get()
            link = item.xpath(".//a/@href").getall()

            yield {
                "price": price,
                "title": title,
                "link": link,
            }

            next_page = response.xpath(
                "//a[contains(@title, 'Seguinte')]/@href"
            ).get()
            if next_page:
                yield scrapy.Request(next_page, callback=self.parse)
