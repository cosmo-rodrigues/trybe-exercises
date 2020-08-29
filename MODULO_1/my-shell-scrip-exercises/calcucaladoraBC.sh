#!/bin/bash
#Trabalhos com cálculo
read -p "Digite um número: " NUMERO1
read -p "Digite outro número: " NUMERO2
SOMA=$[NUMERO1 + NUMERO2]
MTPL=$[NUMERO1 * NUMERO2]
DIVISAO=`echo "scale=03; $NUMERO1 / $NUMERO2" | bc`
echo $NUMERO1 " + " $NUMERO2 " = " $SOMA
echo $NUMERO1 " * " $NUMERO2 " = " $MTPL
echo $NUMERO1 " / " $NUMERO2 " = " $DIVISAO
