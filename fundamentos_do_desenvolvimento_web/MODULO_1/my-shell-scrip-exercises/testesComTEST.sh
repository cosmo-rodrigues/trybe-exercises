#!/bin/bash
#Verificar ezistência de um arquivo ou diretó e indicar o tipo do mesmo
read -p "Digite o caminho do diretório ou arquivo: " CAMINHO

if [ -e $CAMINHO ]
 then
  echo -e "O objeto existe. Vamos verificar se é diretório ou arquivo.\n"
   if [ -d $CAMINHO ]
    then
     echo -e "O $CAMINHO existe, e é um diretório.\n"
   else
	echo -e "O $CAMINHO exite, e é um arquivo.\n"
 fi
	else
	echo "Caminho não encontrado!"
  fi
