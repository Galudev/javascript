const nombreYApellidos = (nombre, apellidos) => {
    return nombre + " " + apellidos;
}

console.log(nombreYApellidos("Lucía", "Gálvez Durán"));

function bool(esActivo){
    console.log(esActivo);
}

bool(true)

const lista = function(...num){
    num.forEach(element => {
        console.log(element)
    })
}

lista(1,2,3,4,5)