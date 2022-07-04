/* ==============VISUALIZACAO DE SENHA============== */
let visuPassword = document.querySelector('#visuPassword');

visuPassword.addEventListener('click', ()=>{
    let inputPassword = document.querySelector('#password')

    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type', 'text')
    }else {
        inputPassword.setAttribute('type', 'password')
    }
})

function logar() {
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    
    let msgError = document.querySelector('#msgError');

    let listUser = [];

    let userValid = {
        user:'',
        email: '',
        password:''
    } 

    listUser = JSON.parse(localStorage.getItem('listUser'))

    listUser.forEach((item) => {
        if(email.value == item.emailReg && password.value == item.passwordReg){
            userValid = {
                user: item.nameReg,
                email: item.emailReg,
                password: item.passwordReg
            }
        }
    });

    if(email.value == userValid.email && password.value == userValid.password){
        window.location.href = 'http://127.0.0.1:5500/HTML/paginaInicial.html'

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

        msgError.setAttribute('style', 'display: none');
        email.setAttribute('style', 'border-color: green')
        password.setAttribute('style', 'border-color: green')
    } else {
        email.setAttribute('style', 'border-color: red')
        password.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        email.focus()
    }
}

let esqueciSenha = document.querySelector('.esqueci')

esqueciSenha.addEventListener('click', ()=>{
    window.location.href = 'http://127.0.0.1:5500/HTML/recuperar%20senha.html'
})

let botCadastre = document.querySelector('.cadastre')

botCadastre.addEventListener('click', ()=>{
    window.location.href = 'http://127.0.0.1:5500/HTML/cadastrar.html'
})