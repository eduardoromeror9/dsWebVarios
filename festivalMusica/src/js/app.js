document.addEventListener('DOMContentLoaded', function () {

  navegacionFija();
  crearGaleria();
  resaltarEnlace();
  scrollNav();
  
});

function navegacionFija() {
  const header = document.querySelector('.header');
  const sobreFestival = document.querySelector('.sobre-festival');

  window.addEventListener('scroll', function() {
    if (sobreFestival.getBoundingClientRect().top < 0) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  }) 
}

function crearGaleria() {

  const CANTIDAD_IMG = 16; // Total de imagenes
  const galeria = document.querySelector('.galeria-imagenes');

  for (let i = 1; i <= CANTIDAD_IMG; i++) {
    const imagen = document.createElement('IMG');
    imagen.src = `src/img/${i}.jpg`;
    imagen.alt = 'Galeria';

    imagen.onclick = function() {
      mostrarImagen(i);
    }

    galeria.appendChild(imagen);
  }

}

function mostrarImagen(i) {

  const imagen = document.createElement('IMG');
  imagen.src = `src/img/${i}.jpg`;
  imagen.alt = 'Galeria';


  // Geenerar el modal
  const modal = document.createElement('DIV');
  modal.classList.add('modal');
  modal.onclick = cerrarModal;
  modal.appendChild(imagen);

  // Agregar  HTML
  const body = document.querySelector('body');
  body.classList.add('overflow-hidden');
  body.appendChild(modal);
}

function cerrarModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add('fade-out');

  setTimeout(() => {
    modal?.remove();
    const body = document.querySelector('body');
    body.classList.remove('overflow-hidden');
    
  }, 500); // Espera 0.5 segundos antes de eliminar el modal
}

const resaltarEnlace = () => {
  document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const enlaces = document.querySelectorAll(".navegacion-principal a");

    let actual = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        actual = section.id;
      }
    });
    enlaces.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + actual) {
        link.classList.add("active");
      }
    });
  });
};

function scrollNav() {
  const enlaces = document.querySelectorAll('.navegacion-principal a');

  enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();
      const seccion = document.querySelector(this.getAttribute('href'));
      seccion.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}