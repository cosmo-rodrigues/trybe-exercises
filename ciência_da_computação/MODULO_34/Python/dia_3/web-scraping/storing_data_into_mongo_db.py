from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")

db = client.catalogue
students = db.book

# book = {
#     "title": "A Light in the Attic",
# }

# document_id = db.books.insert_one(book).inserted_id

# documents = [
#     {
#         "title": "A Light in the Attic",
#     },
#     {
#         "title": "Tipping the Velvet",
#     },
#     {
#         "title": "Soumission",
#     },
# ]
# db.books.insert_many(documents)

print(db.books.find_one())
# busca utilizando filtros
for book in db.books.find({"title": {"$regex": "t"}}):
    print(book["title"])


client.close()
