# print("Vamos calcular seu IMC:\n")

# peso = float(input("Qual o seu peso? "))
# altura = float(input("Qual sua altura? "))

# imc = peso / (altura ** 2)

# print("Seu IMC é ", imc)

# import random

# random_number = random.randint(1, 10)
# guess = ""

# while guess != random_number:
#     guess = int(input("Qual o seu palpite? "))

# print("O número sorteado era: ", guess)

import sys


if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)
