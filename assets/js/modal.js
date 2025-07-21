/**
 * MODAL SYSTEM - Sistema de modais para feedback de status
 */

/**
 * Inicializa o sistema de modal de status do formulário
 */
function initModal() {
    const form = document.querySelector('form');
    const overlay = document.getElementById('statusOverlay');
    const statusTitle = document.getElementById('statusTitle');
    const statusMessage = document.getElementById('statusMessage');
    const statusIcon = document.querySelector('.status-icon');

    if (!form || !overlay || !statusTitle || !statusMessage || !statusIcon) {
        console.warn('Modal: Elementos necessários não encontrados');
        return;
    }

    // Event listener para submissão do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio real do formulário

        // Verifica se o formulário é válido
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        showModal();
    });

    // Event listener para fechar modal clicando no overlay
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            hideModal();
        }
    });

    /**
     * Exibe o modal com estado de loading e depois sucesso
     */
    function showModal() {
        // Exibe o overlay
        overlay.classList.remove('hidden');

        // Estado inicial - enviando
        statusTitle.textContent = 'Enviando...';
        statusMessage.textContent = 'Por favor, aguarde enquanto processamos sua mensagem.';
        statusIcon.innerHTML = '<div class="loading-spinner"></div>';

        // Após 2 segundos, muda para sucesso
        setTimeout(function() {
            statusTitle.textContent = 'Enviado!';
            statusMessage.textContent = 'Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.';
            statusIcon.innerHTML = '<div class="success-icon">✓</div>';

            // Fecha o modal após mais 2 segundos
            setTimeout(function() {
                hideModal();
                form.reset(); // Limpa o formulário
            }, 2000);
        }, 2000);
    }

    /**
     * Esconde o modal
     */
    function hideModal() {
        overlay.classList.add('hidden');
    }
}
