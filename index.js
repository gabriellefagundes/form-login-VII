function validarForm() {
    var usuario = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if (!usuario || !senha) {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}