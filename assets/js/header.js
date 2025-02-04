const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById("sidebar");
const footer = document.getElementById('footer');

// Linhas do botão
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

let isMenuOpen = false; // Estado inicial do menu

const header = document.getElementById('header');
const homeSection = document.getElementById('home');
let lastScrollTop = 0;

function checkScroll() {
  const homeHeight = homeSection.offsetHeight;
  const scrollPosition = window.scrollY;

  // Modifica o estilo do header ao passar da seção Home
  if (scrollPosition > homeHeight) {
    header.classList.add('bg-gray-800', 'rounded-xl', 'shadow-lg');
  } else {
    header.classList.remove('bg-gray-800', 'rounded-xl', 'shadow-lg');
  }

  // Oculta ou mostra o header ao rolar
  if (scrollPosition > lastScrollTop) {
    // Scrolling down
    header.classList.add('hidden-up');
    header.classList.remove('shown-down');
  } else {
    // Scrolling up
    header.classList.remove('hidden-up');
    header.classList.add('shown-down');
  }
  lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; // Evita valores negativos
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

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