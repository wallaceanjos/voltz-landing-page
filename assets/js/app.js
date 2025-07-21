/**
 * APP - Aplicação principal Voltz Landing Page
 * Inicializa todos os módulos JavaScript
 */

/**
 * Inicializa a aplicação
 */
function initApp() {
    console.log('🚀 Voltz Landing Page - Inicializando...');

    // Inicializar módulos
    try {
        // Sistema de máscara de formulário
        if (typeof initFormMask === 'function') {
            initFormMask();
            console.log('✅ Form Mask inicializado');
        } else {
            console.warn('⚠️ initFormMask não encontrado');
        }

        // Sistema de modal
        if (typeof initModal === 'function') {
            initModal();
            console.log('✅ Modal System inicializado');
        } else {
            console.warn('⚠️ initModal não encontrado');
        }

        // Sistema de scroll
        if (typeof initScroll === 'function') {
            initScroll();
            console.log('✅ Scroll System inicializado');
        } else {
            console.warn('⚠️ initScroll não encontrado');
        }

        console.log('🎯 Voltz Landing Page - Todos os módulos carregados!');

    } catch (error) {
        console.error('❌ Erro ao inicializar a aplicação:', error);
    }
}

/**
 * Aguarda o DOM estar pronto e inicializa a aplicação
 */
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});
