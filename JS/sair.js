//botao sair remove token
if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para ter acesso a esta página!')
    window.location.href = '../HTML/login.html'
}

function quit() {
    localStorage.removeItem('token')
    window.location.href = '../HTML/login.html'
}