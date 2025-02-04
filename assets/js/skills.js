// Seleciona todos os cards de habilidades
const habilidadeCards = document.querySelectorAll('.habilidade-card');
  
habilidadeCards.forEach(card => {
  card.addEventListener('click', () => {
    // Seleciona o conteúdo e a seta do card clicado
    const conteudo = card.querySelector('.conteudo');
    const seta = card.querySelector('.seta');

    // Verifica se o conteúdo está expandido
    if (conteudo.classList.contains('max-h-0')) {
      // Expande o conteúdo
      conteudo.classList.remove('max-h-0');
      conteudo.classList.add('max-h-96'); // Ajuste conforme necessário

      // Rotaciona a seta
      seta.classList.add('rotate-180');
    } else {
      // Recolhe o conteúdo
      conteudo.classList.add('max-h-0');
      conteudo.classList.remove('max-h-96');

      // Reseta a rotação da seta
      seta.classList.remove('rotate-180');
    }
  });
});