console.log('Hello!');
//document.querySelectorAll('.carousel img'): Selecciona todas las imágenes dentro del carrusel.
const images = document.querySelectorAll('.carousel img');
//let currentImage = 0;: Variable que almacena el índice de la imagen activa en ese momento.
let currentImage = 0;
//Función que se ejecuta cada cierto tiempo para cambiar la imagen activa.
setInterval(() => {
  //Quita la clase active de la imagen que está activa en ese momento.
  images[currentImage].classList.remove('active');
  //Calcula el índice de la siguiente imagen activa
  currentImage = (currentImage + 1) % images.length;
  //hace lo contrario de .remove
  images[currentImage].classList.add('active');
}, 3000);

const images1 = document.querySelectorAll('.carousel1 img');
let currentImage1 = 0;
setInterval(() => {
  images1[currentImage1].classList.remove('active');
  currentImage1 = (currentImage1 + 1) % images1.length;
  images1[currentImage1].classList.add('active');
}, 3000);
