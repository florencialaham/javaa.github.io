const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function ParoImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

for (let i = 0; i < numeros.length; i++) {
    console.log(`El número ${numeros[i]} es ${ParoImpar(numeros[i])}`);
}






function decirParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log("El numero ${numero} es par");
    } else {
        console.log("El numero ${numero} es impar");
    }
}

decirParOImpar(7); 





const frutas = ["Manzana", "Durazno", "Naranja"];

function agregarFruta (fruta) {
    frutas.push(fruta);
}
agregarFruta ("sandia");

console.log(frutas);






const frutita = ["Manzana", "Durazno", "Naranja", "sandia"];

for (let i= 0; i < frutita.length; i++) {
    console.log (frutita[i]);
}



const frutitas= ["Manzana", "Durazno", "Naranja", "sandia"];
function verificarLongitud(frutas) {
    if (frutas.length % 2 === 0) {
        console.log("La longitud del arrayes par.");
    } else {
        console.log("La longitud del array es impar.");
    }
}

verificarLongitud(frutas); 





const frases = ["No necesito filtros", "De tal palo a tal astilla", "Lo mejor esta por venir", "Somos lo que elegimos ser", "Haz cada dia una obra maestra", "No digas, actua", "Si obedeces todas las reglas, te perderás de la diversión", ];

function mostrarfrases() {
    const valoraleatorio = Math.floor(Math.random() *7);
   return frases[valoraelatorio];
}



function evaluacionAlumno(nombre, nota) {
    if (nota > 4) {
        console.log(`El alumno ${nombre} aprobó`);
    } else {
        console.log(`El alumno ${nombre} reprobó la cursada`);
    }
}

evaluacionAlumno("Juan", 7);
evaluacionAlumno("Martín", 3);






const equipoAzul = ["Joaquín", "Diego", "Martín", "Moi"];
const equipoAmarillo = ["Jorge", "Jon", "Luis", "Ricky"];

function quéEquipoEs(jugador) {
    if (equipoAzul.includes(jugador)) {
        console.log(`El jugador ${jugador} es del equipo Azul.`);
    } else if (equipoAmarillo.includes(jugador)) {
        console.log(`El jugador ${jugador} es del equipo Amarillo.`);
    } else {
        console.log(`El jugador ${jugador} no está en ningún equipo.`);
    }
}

quéEquipoEs("Joaquín");

function mostrarEquiposCompleto(jugador) {
    if (jugador.toLowerCase() === "todos") {
        console.log("Equipo Azul: " + equipoAzul.join(", "));
        console.log("Equipo Amarillo: " + equipoAmarillo.join(", "));
    } else {
        quéEquipoEs(jugador);
    }
}








