let lastScrollTop = 0;
const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById("sidebar");
const header = document.getElementById("header");
const footer = document.getElementById('footer');

// Linhas do botão
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

let isMenuOpen = false; // Estado inicial do menu

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) { // Scroll para baixo 
    header.classList.add('hidden-up'); 
    header.classList.remove('shown-down');
  } else { // Scroll para cima 
    header.classList.remove('hidden-up');
    header.classList.add('shown-down');
  }
  lastScrollTop = scrollTop;
});

menuButton.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen; // Alterna o estado do menu

  // Exibe ou esconde a barra lateral
  if (isMenuOpen) {
    sidebar.classList.add("open");
    header.classList.add("push");
  } else {
    sidebar.classList.remove("open");
    header.classList.remove("push");
  }

  // Animação das linhas para formar um "X"
  line1.classList.toggle("rotate-45");
  line1.classList.toggle("translate-y-[10px]");

  line2.classList.toggle("opacity-0");

  line3.classList.toggle("-rotate-45");
  line3.classList.toggle("-translate-y-[10px]");
});