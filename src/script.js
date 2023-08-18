const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = form.elements.email;
    if (validateEmail(emailInput.value)) {
        alert('Email válido! Enviado com sucesso.');
    } else {
        alert('Email inválido. Por favor, insira um email válido.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
