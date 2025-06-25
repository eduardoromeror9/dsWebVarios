REM Author: Eduardo Romero
REM Date: 2025-02-01
REM Description: Script para ejecutar carga y calculo de datos en Perl
REM Este script ejecuta un ciclo que va del 1 al 31 (puede ser el mes y dia que necesites o por los dias que soliciten)

@echo off
setlocal enabledelayedexpansion

REM Cargar configuración de fechas y tiempos de espera por ejecucion
call configuracion.bat

for /L %%d in (%DIA_INICIO%,1,%DIA_FIN%) do (
    set /A fecha=%ANHO_MES% + %%d

    echo #######################################################
    echo Ejecutando procesos para el día %%d ? Fecha: !fecha!

    echo Ejecutando Carga: !fecha!
    perl cargar.pl -C0 !fecha!
    timeout /t %TIEMPO_ESPERA% /nobreak >nul

    echo Ejecutando Calculo: !fecha!
    perl calcular.pl !fecha!
    timeout /t %TIEMPO_ESPERA% /nobreak >nul
)

endlocal