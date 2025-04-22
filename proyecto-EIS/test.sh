#!/bin/bash

# Cargar configuración de fechas y tiempos de espera por ejecución
source config.sh


for ((d=DIA_INICIO; d<=DIA_FIN; d++)); do
    fecha=$((ANHO_MES + d))

    echo "#######################################################"
    echo "Ejecutando procesos para el día $d → Fecha: $fecha"

    echo "Ejecutando Carga: $fecha" en codigo python
    # python3 main_hola.py "$fecha"
    python3 main_hola.py

    sleep "$TIEMPO_ESPERA"

    echo "Ejecutando Calculo: $fecha"
    # python3 main_hola.py "$fecha"
    python3 main_hola.py

    sleep "$TIEMPO_ESPERA"
done
echo FIN de la ejecución