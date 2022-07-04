const form = document.getElementById('formulario')
const titulo = document.getElementById('tituloAnunciar')
const descricao = document.getElementById('descricaoAnunciar')
const opcao = document.getElementById('opcaoAnunciar')
const email = document.getElementById('emailAnunciar')
const telefone = document.getElementById('telefoneAnunciar')
const cep = document.getElementById('cepAnunciar')
const rua = document.querySelector('#rua')
const bairro = document.querySelector('#bairro')
const cidade = document.querySelector('#cidade')


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
        descricao.setAttribute('style', 'border: 2px solid red')
    } else {
        setSuccessFor(descricao)
        descricao.setAttribute('style', 'border: 2px solid green')
    }
});

opcao.addEventListener('blur', function(){

    const opcaoValue = opcao.value.trim()
    if(opcaoValue === '') {
        setErrorFor(opcao, 'Preencha esse campo')
        opcao.setAttribute('style', 'border: 2px solid red')
    } else {
        setSuccessFor(opcao)
        opcao.setAttribute('style', 'border: 2px solid green')
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
    } else if(telefoneValue.length != 11){
        setErrorFor(telefone, 'Numero de telefone invalido')
    } else {
        setSuccessFor(telefone);
    }
});

cep.addEventListener('blur', function(e){

    let cep = e.target.value;
    limparInput();
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
    addLoading();
    document.body.appendChild(script);
    if(cep === ''){
        removLoading();
    }
});

function popularForm(resposta){

    if("erro" in resposta){
        setErrorFor(cep,'CEP não encontrado')
        removLoading();
    }else{
        setSuccessFor(cep)
        removLoading();
    }

    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
}


function addLoading(){
    var recebeSpan = document.querySelectorAll('.loading');
    for(var i = 0; i < recebeSpan.length; i++) {
        recebeSpan[i].classList.add('loadingVisible');
        
    }
}

function removLoading(){
    var recebeSpan = document.querySelectorAll('.loading');
    for(var i = 0; i < recebeSpan.length; i++) {
    recebeSpan[i].classList.remove('loadingVisible');
    }
}

function limparInput(){

    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
}

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

function isEmail(email) { 
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}