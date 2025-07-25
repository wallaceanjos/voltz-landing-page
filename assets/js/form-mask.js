
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


    if (numeroFormatado.length < 15) {
        telefone.setCustomValidity('O número de telefone deve estar completo');
    } else {
        telefone.setCustomValidity('');
    }
}

function mascaraCEP(cep) {
    const texto = cep.value;
    const apenasNumeros = texto.replace(/\D/g, '').substring(0, 8);

    let cepFormatado = apenasNumeros;
    if (apenasNumeros.length > 5) {
        cepFormatado = `${apenasNumeros.substring(0, 5)}-${apenasNumeros.substring(5)}`;
    }

    cep.value = cepFormatado;

    if (apenasNumeros.length < 8) {
        cep.setCustomValidity('O CEP deve ter 8 dígitos');
    } else {
        cep.setCustomValidity('');
    }
}

function initFormMask() {
    const phone = document.getElementById('phone');
    const cep = document.getElementById('cep');

    if (phone) {

        phone.addEventListener('input', function () {
            mascaraCelular(this);
        });


        phone.addEventListener('keypress', function (e) {
            if (!e.key.match(/[0-9]/)) {
                e.preventDefault();
            }
        });
    }

    if (cep) {
        cep.addEventListener('input', function () {
            mascaraCEP(this);
        });

        cep.addEventListener('keypress', function (e) {
            if (!e.key.match(/[0-9]/)) {
                e.preventDefault();
            }
        });
    }
}
