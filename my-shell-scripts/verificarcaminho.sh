#!/bin/sh

read -p "Digite o caminho de onde você deseja criar o diretório " caminho

if [ ! -d "$caminho" ]
 then
	echo "Entre com um diretório válido !";
fi
