#!/bin/bash
#Comparações de arquivos
if [ -d $HOME ]
then 
	echo -e "Seu diretório home existe e o conteúdo é: \n"
	cd $HOME
	ls
else
	echo "Diretório não encontrado!"
fi
