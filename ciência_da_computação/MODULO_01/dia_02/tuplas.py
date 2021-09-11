numeros = [ 1, 2, 3, 4, 5, 6, 5, 7, 5 ]

indices = [key for key, value in enumerate(numeros) if value == 5]
print(indices)
