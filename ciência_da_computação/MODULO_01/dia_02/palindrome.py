word = input("Digite uma palavra: ")

reverse = word[::-1]

if (word == reverse):
    print("It is a palindrome")
else:
    print("It is NOT a palindrome")
