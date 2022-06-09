
console.log(cambiar("HAYA"));

aca("Acacia");
aca("Hola");

saludo("hola");

function cambiar(texto){
    return texto.replaceAll(`A`,`O`);
}

function aca(texto){
    if(texto.toLowerCase().startsWith("aca")){
        console.log("Empieza por aca.");
    } else {
        console.log("No empieza por aca.");
    }
}

function saludo(palabra){
    if(palabra.toLowerCase()=="hola"){
        console.log(`¡Hola!`.repeat(3));
    }
}