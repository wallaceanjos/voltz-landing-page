/**
 * SCROLL SYSTEM - Sistema de navegação por scroll suave
 */

/**
 * Faz scroll suave até a seção de contato
 */
function scrollToContact() {
    const contatoSection = document.getElementById('contato');

    if (contatoSection) {
        contatoSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        console.warn('Scroll: Seção de contato não encontrada');
    }
}

/**
 * Inicializa o sistema de scroll suave
 */
function initScroll() {
    // Elementos dos botões CTA
    const btnCTA1 = document.getElementById('btnCTA1');
    const btnCTA2 = document.getElementById('btnCTA2');

    // Adicionar event listeners aos botões
    if (btnCTA1) {
        btnCTA1.addEventListener('click', scrollToContact);
    }

    if (btnCTA2) {
        btnCTA2.addEventListener('click', scrollToContact);
    }

    // Log para debug
    const buttonsFound = [btnCTA1, btnCTA2].filter(btn => btn !== null).length;
    console.log(`Scroll: ${buttonsFound} botões CTA encontrados e configurados`);
}
