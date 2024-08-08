let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -5.0714756, lng: -42.7667783 },
    zoom: 15,
  });
}

initMap();

// Carrossel de Imagens
let slideIndex = 0;

function showSlides(n) {
  let slides = document.getElementsByClassName("carousel-item");
  slideIndex = (n + slides.length) % slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
  showSlides(slideIndex + n);
}

document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
  setInterval(() => plusSlides(1), 3000); // Muda de imagem a cada 3 segundos
});
