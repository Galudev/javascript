let num1 = 1;
let num2 = 2;
let num3 = 3;

console.log(suma(num1,num2,num3));

nombreCompleto();
console.log(mayor(num1,num2));

function suma(num1,num2,num3){
    return num1+num2+num3;
}

function nombreCompleto(){
    let nombre = "Lucía";
    let apellido1 = "Gálvez";
    let apellido2 = "Durán";

    let nombreYApellidos = `${nombre} ${apellido1} ${apellido2}`;

    console.log(nombreYApellidos);
}

function mayor(num1,num2){
    // let resultado;
    // if(num1>num2){
    //     resultado = num1;
    // } else {
    //     resultado = num2;
    // }
    // return resultado ? true: false;
    return num1>num2 ? num1 : num2;
}