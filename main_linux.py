from fpdf import FPDF

# Crear clase personalizada para el PDF
class RHCSAGuidePDF(FPDF):
    def header(self):
        self.set_font("Arial", "B", 14)
        self.cell(0, 10, "Guía de Estudio RHCSA + Recursos Gratuitos", ln=True, align="C")
        self.ln(5)

    def chapter_title(self, title):
        self.set_font("Arial", "B", 12)
        self.set_text_color(33, 37, 41)
        self.cell(0, 10, f"● {title}", ln=True)
        self.set_font("Arial", "", 11)
        self.set_text_color(0, 0, 0)

    def add_section(self, title, resources):
        self.chapter_title(title)
        for r in resources:
            self.multi_cell(0, 8, f"- {r}")
        self.ln(4)

# Contenido estructurado
guide = RHCSAGuidePDF()
guide.add_page()
guide.set_auto_page_break(auto=True, margin=15)

# Secciones por tema
sections = {
    "1. Fundamentos de Linux y Shell": [
        "Lectura: http://linuxcommand.org/",
        "Lectura: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/getting_started_with_the_command_line/index",
        "Práctica: https://linuxsurvival.com/",
        "Práctica: https://overthewire.org/wargames/bandit/",
        "Video: https://www.youtube.com/watch?v=tc4ROCJYbm0"
    ],
    "2. Gestión de usuarios y permisos": [
        "Lectura: https://www.digitalocean.com/community/tutorial_series/linux-users-and-groups",
        "Lectura: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_user_accounts/index",
        "Práctica: https://github.com/sandervanvugt/rhcsa9",
        "Video: https://www.youtube.com/watch?v=ukT32_3mB8Q"
    ],
    "3. Servicios y procesos": [
        "Lectura: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_basic_system_settings/assembly_managing-system-services_configuring-basic-system-settings",
        "Video: https://www.youtube.com/watch?v=6vbo6Ed7QEc"
    ],
    "4. Red y firewall": [
        "Lectura: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_and_managing_networking/index",
        "Lectura: https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-8",
        "Video: https://www.youtube.com/watch?v=XBmzmEr3kO8"
    ],
    "5. Almacenamiento y LVM": [
        "Lectura: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_storage_devices/index",
        "Lectura: https://www.digitalocean.com/community/tutorials/how-to-use-lvm-to-manage-storage-devices-on-ubuntu-20-04",
        "Video: https://www.youtube.com/watch?v=xEnGp5D4vIQ"
    ],
    "6. Automatización y tareas programadas": [
        "Lectura: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_basic_system_settings/assembly_automating-system-tasks-using-cron-and-at_configuring-basic-system-settings",
        "Video: https://www.youtube.com/watch?v=3okgI8_rkz0"
    ],
    "7. SELinux (nivel básico)": [
        "Lectura: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/using_selinux/index",
        "Video: https://www.youtube.com/watch?v=_WOKRaM-HIY"
    ],
    "8. Laboratorios y simulacros": [
        "GitHub Labs RHCSA: https://github.com/sandervanvugt/rhcsa9",
        "Laboratorios: https://github.com/acenet-rh/rhcsa-labs",
        "Red Hat Learning: https://learn.redhat.com"
    ]
}

# Agregar secciones al PDF
for title, resources in sections.items():
    guide.add_section(title, resources)

# Guardar el archivo
pdf_path = "/mnt/data/Guia_Estudio_RHCSA.pdf"
guide.output(pdf_path)
pdf_path
# El archivo PDF se ha creado y guardado en la ruta especificada
# Puedes descargar el archivo PDF desde la ruta especificada
# Asegúrate de que la ruta sea accesible en tu entorno
print(f"PDF generado y guardado en: {pdf_path}")