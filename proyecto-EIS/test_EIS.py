import subprocess
import time


import subprocess
import time

def carga_eis():
    for dia in range(1,11):
        print(f"Ejecutando el día {dia}")
        fecha = 250300 + dia
        # subprocess.run(["perl", "cargar.pl", "-C1", str(fecha)])
        print(f"Ejecutando: perl cargar.pl -C1 {fecha}")
        time.sleep(5)
        # subprocess.run(["perl", "calcular.pl",str(fecha)])
        print(f"Ejecutando: perl calcular.pl {fecha}")
        time.sleep(5)
        print(f'Dia {dia} Finalizado')
        print('########################################')
if __name__ == "__main__":
    carga_eis()





































































# def run_script():
#     for dia in range(1, 11):  # del 1 al 31
#         print(f"Ejecutando el día {dia}")

#         # subprocess.run(["perl", "cargar.pl", "-C1", "250301"])
#         print('subprocess.run(["perl", "cargar.pl", "-C1", "250301"])')

#         time.sleep(5)

#         print(f'Dia {dia} Finalizado')
#         print('########################################')

# # if __name__ == "__main__":
# run_script()




























# import subprocess
# import time

# for dia in range(1, 11):  # del 1 al 31
#     print(f"Ejecutando para el día {dia}")
    
#     # Ejecutar el script Perl
#     print('subprocess.run(["perl", "cargar.pl", "-C1", "250301"])')
#     subprocess.run(["perl", "cargar.pl", "-C1", "250301"])
#     print(dia)
    
#     # Si quisieras ejecutar también calcular.pl, descomenta esto:
#     # subprocess.run(["perl", "calcular.pl", "250301"])
    
#     # Espera 60 segundos
#     time.sleep(5)
#!###############################################
# import os
# import time

# for dia in range(1, 32):
#     print(f"Ejecutando para el día {dia}")
#     os.system("perl cargar.pl -C1 250301")
#     # os.system("perl calcular.pl 250301")
#     time.sleep(60)
