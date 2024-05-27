document.getElementById('form-validacao').addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;
    const mensagem = document.getElementById('mensagem');

    if (Number(campoB) > Number(campoA)) {
        mensagem.textContent = 'Formulário válido! Número B é maior que número A.';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Formulário inválido! Número B deve ser maior que número A.';
        mensagem.style.color = 'red';
    }
});
