const form = document.getElementById('formulario')
const titulo = document.getElementById('tituloAnunciar')
const descricao = document.getElementById('descricaoAnunciar')
const opcao = document.getElementById('opcaoAnunciar')
const email = document.getElementById('emailAnunciar')
const telefone = document.getElementById('telefoneAnunciar')
const cep = document.getElementById('cepAnunciar')

titulo.addEventListener('blur', function(){

    const tituloValue = titulo.value.trim()
    if(tituloValue === '') {
        setErrorFor(titulo, 'Preencha esse campo')
    } else {
        setSuccessFor(titulo)
    }
});

descricao.addEventListener('blur', function(){

    const descricaoValue = descricao.value.trim()
    if(descricaoValue === '') {
        setErrorFor(descricao, 'Preencha esse campo')
        descricao.setAttribute('style', 'border-color: red')
    } else {
        setSuccessFor(descricao)
        descricao.setAttribute('style', 'border-color: green')
    }
});

opcao.addEventListener('blur', function(){

    const opcaoValue = opcao.value.trim()
    if(opcaoValue === '') {
        setErrorFor(opcao, 'Preencha esse campo')
        opcao.setAttribute('style', 'border-color: red')
    } else {
        setSuccessFor(opcao)
        opcao.setAttribute('style', 'border-color: green')
    }
});

email.addEventListener('blur', function(){

    const emailValue = email.value.trim()
    if(emailValue === '') {
        setErrorFor(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        setSuccessFor(email)
    }
});

telefone.addEventListener('blur', function(){

    const telefoneValue = telefone.value.trim()
    if(telefoneValue === '') {
        setErrorFor(telefone, 'Preencha esse campo')
    } else if(telefoneValue.length == 12){
        setErrorFor(telefone, 'Numero de telefone invalido')
    } else {
        setSuccessFor(telefone);
    }
});

function setErrorFor(input, message) {
    const controleFormulario = input.parentElement;
    const small = controleFormulario.querySelector('small')

    small.innerText = message

    controleFormulario.className = 'controleFormulario error'
}

function setSuccessFor(input) {
    const controleFormulario = input.parentElement;
    
    controleFormulario.className = 'controleFormulario success'
}