echo off
setlocal enabledelayedexpansion


for /L %%d in (1,1,31) do ( 
    echo Ejecutando para el día %%d
    perl cargar.pl -C1 250301
    @REM perl calcular.pl 250301
    timeout /t 60 /nobreak >nul
)





@REM! 👇👇👇👇👇 Lineas de comentarios y sugerencias 👇👇👇👇👇

@REM? Este script ejecuta un ciclo que va del 1 al 31
@REM? Las lineas de carga y de calculo estan comentadas
@REM? No se pueden ejecutar al mismo tiempo, ya que la carga va primero
@REM? y el ciclo va corriendo dia por dia, iniciando desde el dia 1 (1,1,31)
@REM? El primero inicia, el segundo va sumando dia a dia y el tercero es donde finaliza
@REM? puedes iniciar desde el dia 8 y llegar hasta el  21 (ejemplo)
@REM? las fechas las podemos modificar dependiendo la solicitud que vayan pidiendo

@REM! 👆👆👆👆👆 Lineas de comentarios y sugerencias 👆👆👆👆👆