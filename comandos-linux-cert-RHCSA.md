# En esta hoja estare escribiendo los comando mas usados para la certificacion RHCSA

```bash

# Listar archivos en formato largo
ls -l /var/log

# Listar archivos en formato largo y filtrar por nombre
ls -l /var/log/ | grep nombre_archivo

# Listar todos los servicios
systemctl status

# Listar todos los servicios
systemctl list-units --type=service

# Listar todos los servicios, incluyendo los inactivos
systemctl list-units --type=service --all

# Listar todos los servicios, incluyendo los inactivos y filtrar por nombre
systemctl list-units --type=service --all | grep nombre_servicio

# Para ver el estado de los servicios
systemctl status nombre_servicio

# Para ver el estado de un servicio en especifico
systemctl status nombre_servicio.service

# Para ver el estado de un servicio en especifico
systemctl status nombre_servicio.service | grep Active

```
