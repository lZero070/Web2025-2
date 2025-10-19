// Selecciona todos los botones del menú
const botones = document.querySelectorAll(".nav-btn");

// Selecciona todas las secciones del sitio
const secciones = document.querySelectorAll(".seccion");

// Recorre cada botón del menú
botones.forEach(boton => {
  // Escucha el clic en cada botón
  boton.addEventListener("click", () => {

    // Obtiene el nombre de la sección destino (del atributo data-seccion)
    const destino = boton.dataset.seccion;

    // Oculta todas las secciones
    secciones.forEach(sec => {
      sec.classList.remove("activa");
    });

    // Muestra solo la sección seleccionada
    document.getElementById(destino).classList.add("activa");

    // Desplaza suavemente hacia la parte superior
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


// galeria de imagenes y videos
const imagenes = [
  "foto1.jpg",
  "video1.mp4",
  "video2.mp4",
  "video3.mp4",
  "foto2.jpg",
  "foto3.jpg",
  "foto4.jpg",
  "foto5.jpg",
  "foto6.jpg",
  "foto7.jpg",
  "foto8.jpg",
  "foto9.jpg",
  "foto10.jpg",
  "foto11.jpg",
  "foto12.jpg",
  "video4.mp4",
  "video5.mp4",
  "foto13.jpg"
];

// Obtiene el contenedor donde se mostrarán las imágenes y videos
const galeria = document.getElementById("contenedor-galeria");

// Recorre cada archivo en el arreglo
imagenes.forEach(archivo => {
  // Obtiene la extensión del archivo (jpg, mp4, etc.)
  const extension = archivo.split('.').pop().toLowerCase();

  // Si es una imagen (jpg, png, gif, etc.)
  if (["jpg", "jpeg", "png", "gif"].includes(extension)) {
    const img = document.createElement("img"); // Crea una etiqueta <img>
    img.src = `img/${archivo}`; // Define la ruta (carpeta "img")
    img.alt = archivo; // Texto alternativo
    galeria.appendChild(img); // Agrega la imagen al contenedor
  } 
  // Si es un video (mp4, webm, ogg)
  else if (["mp4", "webm", "ogg"].includes(extension)) {
    const video = document.createElement("video"); // Crea una etiqueta <video>
    video.src = `img/${archivo}`; // Define la ruta del video
    video.controls = true; // Muestra los controles del video (play, pausa, etc.)
    video.width = 280;
    video.height = 180;
    galeria.appendChild(video); // Agrega el video a la galería
  }
});


// animacion de sonrisas

// Variable para contar cuántas sonrisas se han hecho
let contador = 0;

// Obtiene el botón y el texto del contador desde el HTML
const botonSonrisa = document.getElementById("btnSonrisa");
const numSonrisas = document.getElementById("numSonrisas");

// Evento: cuando el usuario hace clic en el botón de "Sonreír"
botonSonrisa.addEventListener("click", () => {
  contador++;

  // Actualiza el texto del contador
  numSonrisas.textContent = `${contador} ${contador === 1 ? 'sonrisa' : 'sonrisas'}`;
  
  // Crea un emoji flotante 
  const emoji = document.createElement("span");
  emoji.textContent = "😊";
  emoji.classList.add("emoji");
  document.body.appendChild(emoji);

  // Posiciona el emoji en una ubicación aleatoria de la pantalla
  emoji.style.left = `${Math.random() * 100}%`;
  emoji.style.top = `${Math.random() * 100}%`;

  // Elimina el emoji después de 2 segundos 
  setTimeout(() => emoji.remove(), 2000);
});
