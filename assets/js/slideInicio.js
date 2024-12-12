document.addEventListener("DOMContentLoaded", () => {
    const inicio = document.querySelector('.inicio'); // Elemento com o fundo
    const images = document.querySelectorAll('.slide-img'); // Todas as imagens do slide
    const prevButton = document.querySelector('.prev'); // Botão "anterior"
    const nextButton = document.querySelector('.next'); // Botão "próximo"

    let currentIndex = 0;

    // Função para atualizar o fundo
    const updateBackground = () => {
        const imageUrl = images[currentIndex].src;
        inicio.style.backgroundImage = `url(${imageUrl})`;
    };

    // Alternar para a próxima imagem
    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateBackground();
    };

    // Alternar para a imagem anterior
    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateBackground();
    };

    // Adicionar eventos aos botões
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Iniciar com a primeira imagem
    updateBackground();

    // Alternar automaticamente a cada 5 segundos
    setInterval(nextSlide, 5000);
});
