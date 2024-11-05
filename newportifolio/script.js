    // Efeito de deslizamento para a seção de habilidades
    window.addEventListener('scroll', function() {
        const habilidadesSection = document.querySelector('.habilidades-conteudo');
        const sectionPosition = habilidadesSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            habilidadesSection.classList.add('animate__animated', 'animate__slideInLeft');
        } else {
            habilidadesSection.classList.remove('animate__animated', 'animate__slideInLeft');
        }
    });