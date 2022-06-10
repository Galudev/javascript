const preguntas = [["¿De qué color es el fondo de pantalla?", "Azul", "Amarillo", "Rojo", "Verde", "Azul"], ["¿Cómo se llama el juego?", "Quiz", "La pregunta", "Quiz", "Cuánto sabes", "Juguemos"], ["¿En qué año estamos?", "2022", "2022", "2050", "1990", "2010"]]
let counter = 0;
document.getElementById("box-result").style.visibility = "hidden";
document.getElementById("question").textContent = preguntas[0][0];
let i = 0
cambiarPregunta(i);

// Capturar el click del botón:
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
b1.addEventListener("click", () => { if (b1.textContent == preguntas[i][1]) { counter++; } i++; i == 3 ? final(counter) : cambiarPregunta(i); });
b2.addEventListener("click", () => { if (b2.textContent == preguntas[i][1]) { counter++; } i++; i == 3 ? final(counter) : cambiarPregunta(i); });
b3.addEventListener("click", () => { if (b3.textContent == preguntas[i][1]) { counter++; } i++; i == 3 ? final(counter) : cambiarPregunta(i); });
b4.addEventListener("click", () => { if (b4.textContent == preguntas[i][1]) { counter++; } i++; i == 3 ? final(counter) : cambiarPregunta(i); });

function cambiarPregunta(i) {
    document.getElementById("question").textContent = preguntas[i][0];
    document.getElementById("b1").textContent = preguntas[i][2];
    document.getElementById("b2").textContent = preguntas[i][3];
    document.getElementById("b3").textContent = preguntas[i][4];
    document.getElementById("b4").textContent = preguntas[i][5];
    document.getElementById("question-count").textContent = `Question ${i+1} of 3`;
}

function final(counter) {
    document.getElementById("score-result").textContent = `Your scores: ${counter}`;
    document.getElementById("box-quiz").remove();
    document.getElementById("box-result").style.visibility = "visible";
}