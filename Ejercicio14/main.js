console.log("------------------------------------ Parte 1 ------------------------------------");
parte1();
console.log("------------------------------------ Parte 2 ------------------------------------");
parte2();
console.log("------------------------------------ Parte 3 ------------------------------------");
parte3();
console.log("------------------------------------ Parte 4 ------------------------------------");
parte4();
console.log("------------------------------------ Parte 5 ------------------------------------");
parte5();
console.log("------------------------------------ Parte 6 ------------------------------------");
parte6();

function parte1() {
    let array = ['🍔', '🌯', '🍣', '🍕', '🍜', '🍱', '🍙', '🍘', '🥩'];

    let pizza = array.indexOf('🍕');
    array = array.fill('🍺', pizza + 1, array.length);

    console.log(array);
}

function parte2() {
    let array = ['🍕', '🍕', '🍍', '🍕', '🍕'];
    const piña = (currentValue) => currentValue === '🍍';
    if (array.some(piña)) {
        console.log("Hay al menos una piña");
    } else {
        console.log("No hay ninguna piña");
    }
}

function parte3(){
    let array = ['🍕', '🍕', '🍍', '🍕', '🍕'];
    const pos = array.indexOf('🍍');
    array.splice(pos,1);
    console.log(array);
}

function parte4(){
    let array = ['🍓','🍋','🍓','🍋','🍓'];

    function cambiar(item, index, array){
        if (item == '🍓') {
            array[index] = '🍄';
        }
    }

    array.forEach(cambiar)
    console.log(array);
}

function parte5(){
    let array = ['🌶','🥛','🌶','🥛','🌶','🥛'];
    let arr = [];
    function añadir(item, index, array){
        arr.push(array[index]);
        if (item == '🌶') {
            arr.push('🥵');
        }
    }
    array.forEach(añadir);
    array=arr;
    console.log(array);
}

function parte6(){
    let array = ['🎴','🎴','🎴','🃏','🎴','🎴','🎴'];
    let arr = [];
    function añadirCarta(item, index, array){
        arr.push(array[index]);
        if (item == '🎴' && array[index+1] == '🎴') {
            arr.push('🃏');
        }
    }
    array.forEach(añadirCarta);
    array=arr;
    console.log(array);
}