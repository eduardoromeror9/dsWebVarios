REM Author: Eduardo Romero
REM Date: 2025-04-01
REM Description: Script para ejecutar carga y calculo de datos en Perl
REM Este script ejecuta un ciclo que va del 1 al 31 (puede ser el mes y dia que necesites)

@echo off
setlocal enabledelayedexpansion

REM Cargar configuración de fechas y tiempos de espera por ejecucion
call configuracion.bat

for /L %%d in (%DIA_INICIO%,1,%DIA_FIN%) do (
    set /A fecha=%ANHO_MES% + %%d

    echo #######################################################
    echo Ejecutando procesos para el día %%d → Fecha: !fecha!

    echo Ejecutando Carga: !fecha!
    perl cargar.pl -C1 !fecha!
    timeout /t %TIEMPO_ESPERA% /nobreak >nul

    echo Ejecutando Calculo: !fecha!
    perl calcular.pl !fecha!
    timeout /t %TIEMPO_ESPERA% /nobreak >nul
)

endlocal


REM 👇👇👇👇👇 Lineas de comentarios y sugerencias 👇👇👇👇👇

REM Este script ejecuta un ciclo que va del 1 al 31 (puede ser el mes y dia que necesites)
REM el ciclo va corriendo dia por dia, iniciando desde el dia 1 (1,1,31)
REM El primero inicia, el segundo va sumando dia a dia y el tercero es donde finaliza
REM puedes iniciar desde el dia 8 y llegar hasta el  21 (ejemplo)
REM todo dependiendo de la fecha que pidan
REM No se pueden ejecutar al mismo tiempo, ya que la carga va primero
REM hacemos la carga y luego vamos con el calculo, despues de un tiempo de espera de 30 segundo(ejemplo)
REM las fechas las podemos modificar dependiendo la solicitud que vayan pidiendo
REM el tiempo de espera es para que no se ejecuten al mismo tiempo.
REM en el caso del llamado al archivo de configuracion.bat no sera necesario especificar la ruta siempre y cuando
REM el archivo de configuracion.bat este en la misma carpeta que el script
REM en caso contrario se debe especificar la ruta completa (call "C:\ruta\ruta\ruta\configuracion.bat")

REM 👆👆👆👆👆 Lineas de comentarios y sugerencias 👆👆👆👆👆






