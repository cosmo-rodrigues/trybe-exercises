#!/bin/bash
#verififando se o caminho de um arquivo existe!

  #!/bin/bash

 read -p "Entre com o diretório: " FILE
  if [ -e $FILE ]
    then
       echo "O caminho $FILE está habilitado!"
  fi
  if [ -w $FILE ]
    then
      echo "Você tem permissão para editar $FILE"
    else
      echo "Você NÃO foi autorizado a editar $FILE"
  fi
