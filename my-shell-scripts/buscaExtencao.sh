#!/bin/bash
#Localiza arquivos pela extenção
read -p "Digite a extenção de arquivo: " EXTENCAO
RESULTADO=$( find . -type f -name "*.$EXTENCAO*" )

if [ -e $RESULTADO  ]
	then
	echo "$RESULTADO"
	else
	echo "O arquivo não existe!"
fi
