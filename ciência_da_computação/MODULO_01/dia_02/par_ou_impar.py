from random import randint
perdeu = False
while perdeu != True:
    numero_user = int(input("Digite um número: "))
    user = input("P ou I? ")
    numero_pc = randint(1, 10)
    result = numero_user + numero_pc
    if (user == "P"):
        if (result % 2 == 0):
            print("Você venceu!")
        else:
            print("Perdeu!")
            perdeu = True
    elif (user == "I"):
        if (result % 2 != 0):
            print("Você venceu!")
        else:
            print("Perdeu!")
            perdeu = True
    else:
        print("pção inválida, tente novamente!")
