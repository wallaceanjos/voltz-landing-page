
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


function initScroll() {

    const btnCTA1 = document.getElementById('btnCTA1');
    const btnCTA2 = document.getElementById('btnCTA2');

    if (btnCTA1) {
        btnCTA1.addEventListener('click', scrollToContact);
    }

    if (btnCTA2) {
        btnCTA2.addEventListener('click', scrollToContact);
    }

    const buttonsFound = [btnCTA1, btnCTA2].filter(btn => btn !== null).length;
}
