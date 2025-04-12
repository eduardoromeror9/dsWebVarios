#!/bin/bash

# Cargar configuración de fechas y tiempos de espera por ejecución
source config.sh
# Verificar si se han definido las variables necesarias
if [ -z "$ANHO_MES" ] || [ -z "$DIA_INICIO" ] || [ -z "$DIA_FIN" ] || [ -z "$TIEMPO_ESPERA" ]; then
    echo "Error: Las variables ANHO_MES, DIA_INICIO, DIA_FIN y TIEMPO_ESPERA deben estar definidas en config.sh."
    exit 1
fi

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