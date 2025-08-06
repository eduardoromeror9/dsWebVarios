document.addEventListener('DOMContentLoaded', function () {

  crearGaleria();

  
});

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