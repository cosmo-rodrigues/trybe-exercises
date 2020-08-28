#!/bin/bash
read -p "Digite o caminho do arquivo: " CAMINHO
if [ -f $CAMINHO ]
then
  echo -e "O Arquivo existe.\n"
   if [ -w $CAMINHO ]
    then
      echo -e "\nVocê tem permição para editar o $CAMINHO.\n"
	head $CAMINHO
       else
       echo -e "Mas você não pode edita-lo!\n"
fi
      else
	echo -e "$CAMINHO não é um arquivo ou não existe!\n"
fi
