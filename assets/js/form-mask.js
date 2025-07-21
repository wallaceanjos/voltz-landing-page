/**
 * FORM MASK - Sistema de máscara para campos do formulário
 */

/**
 * Aplica máscara ao campo de telefone celular
 * @param {HTMLElement} telefone - Elemento input do telefone
 */
function mascaraCelular(telefone) {
    const texto = telefone.value;
    const apenasNumeros = texto.replace(/\D/g, '').substring(0, 11);

    let numeroFormatado = apenasNumeros;
    if (apenasNumeros.length >= 2) {
        numeroFormatado = `(${apenasNumeros.substring(0, 2)}`;
        if (apenasNumeros.length > 2) {
            numeroFormatado += `) ${apenasNumeros.substring(2, 7)}`;
            if (apenasNumeros.length > 7) {
                numeroFormatado += `-${apenasNumeros.substring(7)}`;
            }
        }
    }

    telefone.value = numeroFormatado;

    // Valida se tem 15 caracteres (incluindo formatação)
    if (numeroFormatado.length < 15) {
        telefone.setCustomValidity('O número de telefone deve estar completo');
    } else {
        telefone.setCustomValidity('');
    }
}

/**
 * Inicializa a máscara de celular
 */
function initFormMask() {
    const celular = document.getElementById('celular');

    if (celular) {
        // Aplicar máscara conforme digita
        celular.addEventListener('input', function () {
            mascaraCelular(this);
        });

        // Permitir apenas números
        celular.addEventListener('keypress', function (e) {
            if (!e.key.match(/[0-9]/)) {
                e.preventDefault();
            }
        });
    }
}
