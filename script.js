const inputArea = document.getElementById("inputArea");
const textArea = document.getElementById("textArea");
const button = document.querySelector(".button");
const resultArea = document.getElementById("resultArea");


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    resultArea.value = textoEncriptado;
    textArea.value = "";
}


function encriptar(stringEncriptada) {
    // as chaves serão utilizadas para encriptar meu texto
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        // includes serve para arrays e strings
        // retorna um boolean 
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(resultArea.value)
    resultArea.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {

    // as chaves serão utilizadas para encriptar meu texto
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    // Substituir os padrões maiores primeiro
    for (let i = matrizCodigo.length - 1; i >= 0; i--) {
        // Substitua o padrão maior primeiro
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }

    return stringDesencriptada;
}

function copiar() {
    navigator.clipboard.writeText(resultArea.value);

}