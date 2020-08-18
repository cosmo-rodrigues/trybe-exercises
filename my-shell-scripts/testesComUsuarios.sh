#!/bin/bash
#Testes de variáveis
read -p "Qual o seu nome? " nome
read -p "Quantos anos você tem? " idade
read -p "Digite uma senha: " senha
read -p "Digite novamente sua senha: " senha2
if [ $senha = $senha2 ]
then
	echo "Sua senha está correta $nome"
	echo "VocÊ tem $idade anos de idade"
	else
	echo "Usuário não encontrado"
fi
