const form = document.getElementById('form-numeros');

function verificaNumero(num1, num2) {
    return parseInt(num2) > parseInt(num1);
}

form.addEventListener('submit', function(e) {

    e.preventDefault();

    const num1 = document.getElementById('numero-um');
    const num2 = document.getElementById('numero-dois');

    const mensagemSucesso = `O número ${num2.value} é maior que o número ${num1.value}.`;
    const mensagemErro = `O número ${num2.value} é menor ou igual ao número ${num1.value}.`;
    const containerMensagem = document.querySelector('.message');

    let formValido = verificaNumero(num1.value, num2.value);

    if(formValido){
        containerMensagem.innerHTML = mensagemSucesso;
        num2.classList.remove('error');
        num2.classList.add('success');
        containerMensagem.classList.remove('error');
        containerMensagem.classList.add('success');
    } else {
        containerMensagem.innerHTML = mensagemErro;
        num2.classList.remove('success');
        num2.classList.add('error');
        containerMensagem.classList.remove('success');
        containerMensagem.classList.add('error');
    }
});