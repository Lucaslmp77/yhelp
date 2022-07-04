let zip = document.querySelector('#zip');
let street = document.querySelector('#street');
let neighborhood = document.querySelector('#neighborhood');
let city = document.querySelector('#city');
let FD = document.querySelector('#FD'); 

zip.addEventListener('blur', async function(e) {
    let zip = e.target.value;
    let script  = document.createElement('script');
    const small = document.getElementById('small');
    const ZIP = document.getElementById('zip');
    const inputt = document.querySelectorAll('input');

    script.src = 'https://viacep.com.br/ws/'+zip+'/json/?callback=formInformation';
    document.body.appendChild(script);

    if(ZIP.value === '') {
        ZIP.style.borderColor = "#C02F1F"
        small.innerHTML = "Essa informação é obrigatória"
    }
});

async function formInformation(result) {
    const small = document.querySelector('small');
    const inputt = document.querySelectorAll('input')
    small.innerHTML = ""
    
    if("error" in result){
        zip.style.borderColor = ""
        small.innerHTML = "O CEP inserido é inválido"
        inputt.value = ""
    } else {
        zip.style.borderColor = "#2ECC71"
        await delay(1);

    street.value = result.logradouro;
    neighborhood.value = result.bairro;
    city.value = result.localidade;
    FD.value = result.uf;
    }
}

function delay(i){

    return new Promise(function(resolve){

        zip.value = 'Carregando...'
        street.value = 'Carregando...'
        neighborhood.value = 'Carregando...'
        city.value = 'Carregando...'
        FD.value = 'Carregando...'

        setTimeout(resolve,i*500);
    });
}