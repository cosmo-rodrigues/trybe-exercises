#!/bin/bash
# IF ELSE

if [ -f /etc/passwd ]
    then
	if [ "$USER" = "root" ]
	then
	   DIA=$(date '+%a')
 
	 if ["$DIA" = "sex"]
	then
	echo "Todas as condições foram satisfeitas.\n"
      fi
   fi
fi
else
echo "Não deu certo!"
fi
