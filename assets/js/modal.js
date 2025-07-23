
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

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        submitForm(form);
    });

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            hideModal();
        }
    });

    async function submitForm(form) {
        showLoadingModal();

        try {
            const formData = new FormData(form);
            const data = {
                first_name: formData.get('first_name'),
                last_name: formData.get('last_name'),
                email: formData.get('email'),
                company: formData.get('company'),
                employee_count: formData.get('employee_count'),
                industry: formData.get('industry'),
                project_type: formData.get('project_type'),
                phone: formData.get('phone')
            };

            const response = await fetch('https://yuwdzuuos4r7wwz3lm6nipmrpu0opiza.lambda-url.us-east-2.on.aws/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                showSuccessModal();
                form.reset();
            } else {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            showErrorModal();
        }
    }

    function showLoadingModal() {
        overlay.classList.remove('hidden');
        statusTitle.textContent = 'Enviando...';
        statusMessage.textContent = 'Por favor, aguarde enquanto processamos sua mensagem.';
        statusIcon.innerHTML = '<div class="loading-spinner"></div>';
    }

    function showSuccessModal() {
        statusTitle.textContent = 'Enviado!';
        statusMessage.textContent = 'Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.';
        statusIcon.innerHTML = '<div class="success-icon">✓</div>';

        setTimeout(function() {
            hideModal();
        }, 3000);
    }

    function showErrorModal() {
        statusTitle.textContent = 'Erro ao enviar!';
        statusMessage.textContent = 'Ocorreu um erro ao enviar sua mensagem. Tente novamente em alguns minutos.';
        statusIcon.innerHTML = '<div class="error-icon">✗</div>';

        setTimeout(function() {
            hideModal();
        }, 4000);
    }

    function hideModal() {
        overlay.classList.add('hidden');
    }
}
