
mes(12);
console.log(numero("5"));

function mes(num){
    switch (num) {
        case 1: console.log("Enero"); break;
        case 2: console.log("Febrero"); break;
        case 3: console.log("Marzo"); break;
        case 4: console.log("Abril"); break;
        case 5: console.log("Mayo"); break;
        case 6: console.log("Junio"); break;
        case 7: console.log("Julio"); break;
        case 8: console.log("Agosto"); break;
        case 9: console.log("Septiembre"); break;
        case 10: console.log("Octubre"); break;
        case 11: console.log("Noviembre"); break;
        case 12: console.log("Diciembre"); break;
        default: console.error("Mes no válido (introducir un número entre 1 y 12)"); break;
    }
}

function numero(num){
    switch (num){
        case "1": num = 1; break;
        case "2": num = 2; break;
        case "3": num = 3; break;
        case "4": num = 4; break;
        case "5": num = 5; break;
        default: console.error("Número no válido (introducir un número entre 1 y 5"); break;
    }
    return num;
}