var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordConfirmation = document.getElementById("passworConfirmation");

var registerError = document.querySelector('#registerError');
var registerSuccess = document.querySelector('#registerSuccess');

var validName = false;
var validEmail = false;
var validPassword = false;
var validConfirmation = false;

username.addEventListener("keyup", function() {
    if(username.value === "") {
        addErro(username, "Insira um nome de usuário");
        validName = false;
    }else if(username.value.length < 3) {
        addErro(username, "Usuário deve ter no minímo 3 caracteres");
        validName = false;
    }else if(username.value.length > 24) {
        addErro(username, "Usuário não deve exceder 24 caracteres");
        validName = false;
    }else{
        addSucesso(username);
        validName = true;
    }
})

email.addEventListener("keyup", function() {
    if(email.value === "") {
        addErro(email, "Insira um email");
        validEmail = false;
    }else if (!checkEmail(email.value)) {
        addErro(email, "O email não é válido.");
        validEmail = false;
    }else{
        addSucesso(email);
        validEmail = true;
    }
})

password.addEventListener("keyup", function() {
    if(password.value === "") {
        addErro(password, "Insira uma senha");
        validPassword = false;
    }else if (password.value.length < 8) {
        addErro(password, "A senha precisa ter no mínimo 8 caracteres.");
        validPassword = false;
    }
    else{
        addSucesso(password);
        validPassword = true;
    }
})

passwordConfirmation.addEventListener("keyup", function() {
    if(passwordConfirmation.value === "") {
        addErro(passwordConfirmation, "Confirme a senha");
        validConfirmation = false;
    }else if (passwordConfirmation.value != password.value) {
        addErro(passwordConfirmation, "As senhas não são iguais.");
        validConfirmation = false;
    }else if (passwordConfirmation.value.length < 8) {
        addErro(passwordConfirmation, "As senhas não são iguais.");
        validConfirmation = false;
    }else{
        addSucesso(passwordConfirmation);
        validConfirmation = true;
    }
})

/* ==============FUNÇÃO QUE VERIFICA SE O EMAIL POSSUI O FORMATO IDEAL============== */
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

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

let visuConfirm = document.querySelector('#visuConfirm');

visuConfirm.addEventListener('click', ()=>{
    let inputConfirm = document.querySelector('#passworConfirmation')

    if(inputConfirm.getAttribute('type') == 'password'){
        inputConfirm.setAttribute('type', 'text')
    }else {
        inputConfirm.setAttribute('type', 'password')
    }
})

/* ==============ADD ERRO============== */
function addErro(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    formControl.className = "boxForm error";
}

/* ==============ADD SUCESSO============== */
function addSucesso(input) {
    const formControl = input.parentElement;

    formControl.className = "boxForm success";
}

function register() {
    if(validName && validEmail && validPassword && validConfirmation){
        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')

        listUser.push(
            {
                nameReg: username.value,
                emailReg: email.value,
                passwordReg: password.value
            }
        )

        localStorage.setItem('listUser', JSON.stringify(listUser))

        registerSuccess.setAttribute('style', 'display: block');
        registerSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'

        registerError.innerHTML = ''
        registerError.setAttribute('style', 'display: none');

            setTimeout(() => {
                window.location.href = '../HTML/login.html'
            }, 2000)

    }else{
        registerError.setAttribute('style', 'display: block');
        registerError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'

        registerSuccess.innerHTML = ''
        registerSuccess.setAttribute('style', 'display: none');
    }
}

/* BOTAO ENTRAR DIRECIONA PRA TELA DE LOGIN */
let botAcess = document.querySelector('.entrar')

botAcess.addEventListener('click', ()=>{
    window.location.href = '../HTML/login.html'
})

/* =============DEBOUNCE============= */
const debounce = (fn, time) => {
    let debounceId = 0
    return () => {
        clearTimeout(debounceId)
        debounceId = setTimeout(fn, time)
    }
}