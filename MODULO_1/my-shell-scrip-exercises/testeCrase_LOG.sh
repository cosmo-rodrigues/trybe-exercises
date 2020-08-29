#!/bin/bash
#Usando comando entre crases
DATA_LOG=`date +%d-%m-%y_%H:%M:%S`
ls -la > log_$DATA_LOG.txt
exit 7
