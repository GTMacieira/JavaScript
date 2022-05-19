function alterar (titulo){
    document.getElementById("titulo").innerHTML = titulo
    document.getElementById("campo").value = titulo
}

function somar (x, y){
    let total = x + y; //var global, let apenas dentro da variavel
    return total
}

//alterar("Frase de exemplo")

var resultado = somar(1, 99);