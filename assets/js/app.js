function initApp() {

    try {
        if (typeof initFormMask === 'function') {
            initFormMask();
        } else {
            console.warn('initFormMask não encontrado');
        }

        if (typeof initModal === 'function') {
            initModal();
        } else {
            console.warn('initModal não encontrado');
        }

        if (typeof initScroll === 'function') {
            initScroll();
        } else {
            console.warn('initScroll não encontrado');
        }
    } catch (error) {
        console.error('Erro ao inicializar a aplicação:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initApp();
});
