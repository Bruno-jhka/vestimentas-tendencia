let btn_femi = document.getElementById('feminino')
let btn_masc = document.getElementById('masculino')

btn_femi.addEventListener("click", function(){
    window.location.assign('/Categorias/feminino.html')
})

btn_masc.addEventListener("click", function(){
    window.location.assign('/Categorias/masculino.html')
})


function vestido(){
    window.location.assign("/Categorias/vestido.html")
}

function moleton(){
    window.location.assign("/Categorias/moleton.html")
}

function camisa(){
    window.location.assign("/Categorias/camisa.html")
}

function calça(){
    window.location.assign("/Categorias/calça.html")
}

function bermuda(){
    window.location.assign("/Categorias/bermuda.html")
}

function calçado(){
    window.location.assign("/Categorias/calçado.html")
}