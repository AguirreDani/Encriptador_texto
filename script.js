


function encriptador(palabra1) {
    if (typeof palabra1 === 'string') {
        if (palabra1.includes("e") || palabra1.includes("i") || palabra1.includes("a") || palabra1.includes("o") || palabra1.includes("u")) {
            var resultado1 = palabra1.replace(/e/g, "enter");
            resultado1 = resultado1.replace(/i/g, "imes");
            resultado1 = resultado1.replace(/a/g, "ai");
            resultado1 = resultado1.replace(/o/g, "ober");
            resultado1 = resultado1.replace(/u/g, "ufat");
            return resultado1;
        } else {
            return palabra1;
        }
    }
}

function desencriptador(palabra2) {
    if (typeof palabra2 === 'string') {
        if (palabra2.includes("enter") || palabra2.includes("imes") || palabra2.includes("ai") || palabra2.includes("ober") || palabra2.includes("ufat")) {
            var resultado2 = palabra2.replace(/enter/g, "e");
            resultado2 = resultado2.replace(/imes/g, "i");
            resultado2 = resultado2.replace(/ai/g, "a");
            resultado2 = resultado2.replace(/ober/g, "o");
            resultado2 = resultado2.replace(/ufat/g, "u");
            return resultado2;
        } else {
            return palabra2;
        }
    }else{
        
    }
}



function quitarImagen_texto() {
    const clases = ["EsperaResultado__imagen", "EsperaResultado__aviso", "EsperaResultado__subtitulo"];

    clases.forEach(clase => {
        const elementos = document.getElementsByClassName(clase);
        Array.from(elementos).forEach(elemento => {
            elemento.style.display = "none";
        });
    });
}

function mostrarResultado(){
    const elementoMostrarResultado = document.getElementById("mostrarResultado");
    elementoMostrarResultado.style.display = "block";
}



function encriptarTexto (){
    const caracteres = /[A-Z0-9~!@#$%&*()_+|{}[\]\\\/?><^:"`;.,áéíóúàèìòù']/g;
    var texto = document.querySelector("#textoEncriptar").value;
    if (texto == ""){
        alert("Mis disculpas, pero no se permite que esté vacío.");
        

    } else if (texto.match(caracteres) != texto.match(caracteres)){
        alert("El texto debe estar en minúsculas y sin acentos, por favor evita caracteres especiales.");
        } else{
        var textoEncriptar = document.getElementById("textoEncriptar").value;
        var resultadoEncriptado = encriptador(textoEncriptar);
        document.getElementById("resultado").textContent =  resultadoEncriptado;

        quitarImagen_texto()
        mostrarResultado()
        
    }
}

function desencriptarTexto() {
    const caracteres = /[A-Z0-9~!@#$%&*()_+|{}[\]\\\/?><^:"`;.,áéíóúàèìòù']/g;
    var texto = document.querySelector("#textoEncriptar").value;
    if (texto == ""){
        alert("Mis disculpas, pero no se permite que esté vacío.");
        

    } else if (texto.match(caracteres) != texto.match(caracteres)){
        alert("El texto debe estar en minúsculas y sin acentos, por favor evita caracteres especiales.");
        } else{
            var textoDesencriptar = document.getElementById("textoEncriptar").value;
            var resultadoDesencriptado = desencriptador(textoDesencriptar);
            document.getElementById("resultado").textContent =  resultadoDesencriptado;

            quitarImagen_texto()
            mostrarResultado()
            


    } 
}

function copiarTexto() {
    let resultado=document.getElementById("resultado");
    let boton =document.getElementById("copiar");

    navigator.clipboard.writeText(resultado.textContent);
    boton.textContent="COPIADO";
}



