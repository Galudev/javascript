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
    let array = ['π', 'π―', 'π£', 'π', 'π', 'π±', 'π', 'π', 'π₯©'];

    let pizza = array.indexOf('π');
    array = array.fill('πΊ', pizza + 1, array.length);

    console.log(array);
}

function parte2() {
    let array = ['π', 'π', 'π', 'π', 'π'];
    const piΓ±a = (currentValue) => currentValue === 'π';
    if (array.some(piΓ±a)) {
        console.log("Hay al menos una piΓ±a");
    } else {
        console.log("No hay ninguna piΓ±a");
    }
}

function parte3(){
    let array = ['π', 'π', 'π', 'π', 'π'];
    const pos = array.indexOf('π');
    array.splice(pos,1);
    console.log(array);
}

function parte4(){
    let array = ['π','π','π','π','π'];

    function cambiar(item, index, array){
        if (item == 'π') {
            array[index] = 'π';
        }
    }

    array.forEach(cambiar)
    console.log(array);
}

function parte5(){
    let array = ['πΆ','π₯','πΆ','π₯','πΆ','π₯'];
    let arr = [];
    function aΓ±adir(item, index, array){
        arr.push(array[index]);
        if (item == 'πΆ') {
            arr.push('π₯΅');
        }
    }
    array.forEach(aΓ±adir);
    array=arr;
    console.log(array);
}

function parte6(){
    let array = ['π΄','π΄','π΄','π','π΄','π΄','π΄'];
    let arr = [];
    function aΓ±adirCarta(item, index, array){
        arr.push(array[index]);
        if (item == 'π΄' && array[index+1] == 'π΄') {
            arr.push('π');
        }
    }
    array.forEach(aΓ±adirCarta);
    array=arr;
    console.log(array);
}