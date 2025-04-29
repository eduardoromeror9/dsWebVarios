#!/bin/bash

# Esto funcionaria perfectamente para ejecutar los I11 de forma automatica y mas limpia, ya que nos estariamos evitando ir al menu para ejecutar el I11 manualmente, evitariamos errores o saltarnos alguna fecha.

# Definimos las fechas de inicio y fin segun la solicitud.
fecha_inicio="20250401"
fecha_fin="20250405"

# Esto solo es una validacion para que se puedan cumplir las fechas de inicio y fin.
current_date=$(date -d "${fecha_inicio}" +%Y%m%d) || { echo "Fecha de inicio inválida"; exit 1; }
end_date=$(date -d "${fecha_fin}" +%Y%m%d) || { echo "Fecha de fin inválida"; exit 1; }

if [ "$current_date" -gt "$end_date" ]; then
    echo "La fecha de inicio no puede ser mayor a la fecha de fin."
    exit 1
fi

# Bucle desde la fecha de inicio hasta la fecha de fin
while [ "$current_date" -le "$end_date" ]; do
    echo "Ejecutando test.sh $current_date"
    # ./test.sh "$current_date"
    python3 main_hola.py "$current_date"

    # tiempo de espera por cada ejecucion (en segundos).
    sleep 5

    # Esto ira sumando la fecha de incio, hasta la fecha de fin, siempre que la fecha sea menor o igual a la de fin, cuando llegue a la fecha final termina el bucle y finaliza la ejecucion de los I11 que nos solicitaron.
    current_date=$(date -d "$current_date +1 day" +%Y%m%d)

    # avisar que se han terminado las fechas de ejecucion.
    if [ "$current_date" -gt "$end_date" ]; then
        echo "Se han terminado las fechas de ejecucion."
    fi
done






