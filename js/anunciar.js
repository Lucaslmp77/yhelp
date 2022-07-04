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
    } else {
        setSuccessFor(descricao)
    }
});

opcao.addEventListener('blur', function(){

    const opcaoValue = opcao.value.trim()
    if(opcaoValue === '') {
        setErrorFor(opcao, 'Preencha esse campo')
    } else {
        setSuccessFor
    }
});