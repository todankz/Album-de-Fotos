var url = 'https://projetofinal-ppw.herokuapp.com/api/98850'
var input = document.querySelector('#add_image')
var form = document.querySelector('#album')
var erase = document.querySelector('#erase')

function carrega_album(){
    form.textContent=''
    var requisicao = fetch(url)
    var resposta = requisicao.then(function(resposta){
        return resposta.json()
    })
    resposta.then(function(dados){
        for(var i=0; i<dados.length; i++){
                var img = document.createElement('img')
                img.id = 'imagem'
                img.className= 'image_style'
                img.setAttribute('src',dados[i].imageurl)
                form.appendChild(img)
        }
    })
}

input.addEventListener('submit', function(event){
    event.preventDefault()
    var imageurl = {
        imageurl: input.querySelector('#link').value
       }
    var options = {
        method: 'POST',
        body: JSON.stringify(imageurl),
        headers: {
            'content-type': 'application/json'
        }
    }
    var requisicao = fetch(url, options)
    var resposta = requisicao.then(function(resposta){
        return resposta.json()
    })
    resposta.then(function(dados){
            console.log(dados)
            carrega_album()
    })
})

erase.addEventListener('click', function(event){
    event.preventDefault()
    var options = {
        method: 'DELETE',
    }
    var requisicao = fetch(url, options)
    var resposta = requisicao.then(function(resposta){
        return resposta.json()
    })
    resposta.then(function(dados){
        console.log(dados)
        carrega_album()
    })
})

var inputImage = document.querySelector('#link')
var validButton = document.querySelector('#submit')

validButton.addEventListener('click', function(e){
    if(inputImage.value.length<=10){
        e.preventDefault();
    }
})
carrega_album()