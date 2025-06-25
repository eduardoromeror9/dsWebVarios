REM Author: Eduardo Romero
REM Date: 2025-02-01
REM Description: Script para ejecutar carga y calculo de datos en Perl
REM Este script ejecuta un ciclo que va del 1 al 31 (puede ser el mes y dia que necesites)

@echo off
setlocal enabledelayedexpansion


for /L %%d in (1,1,31) do (
    set /A fecha=250300 + %%d
    echo Ejecutando Carga para el día: %%d
    perl cargar.pl -C1 !fecha!
    timeout /t 30 /nobreak >nul
    echo Ejecutando Calculo para el día: %%d
    perl calcular.pl !fecha!
    timeout /t 30 /nobreak >nul
)


@REM! 👇👇👇👇👇 Lineas de comentarios y sugerencias 👇👇👇👇👇

@REM? Este script ejecuta un ciclo que va del 1 al 31 (puede ser el mes y dia que necesites)
@REM? el ciclo va corriendo dia por dia, iniciando desde el dia 1 (1,1,31)
@REM? El primero inicia, el segundo va sumando dia a dia y el tercero es donde finaliza
@REM? puedes iniciar desde el dia 8 y llegar hasta el  21 (ejemplo)
@REM? todo dependiendo de la fecha que pidan
@REM? No se pueden ejecutar al mismo tiempo, ya que la carga va primero
@REM? hacemos la carga y luego vamos con el calculo, despues de un tiempo de espera de 30 segundo(ejemplo)
@REM? las fechas las podemos modificar dependiendo la solicitud que vayan pidiendo
@REM? el tiempo de espera es para que no se ejecuten al mismo tiempo.

@REM! 👆👆👆👆👆 Lineas de comentarios y sugerencias 👆👆👆👆👆

@REM for /L %%d in (1,1,31) do ( 
@REM     echo Ejecutando para el día %%d
@REM     perl cargar.pl -C1 250301
@REM     @REM perl calcular.pl 250301
@REM     timeout /t 60 /nobreak >nul
@REM )