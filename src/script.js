// comprobando las comparaciones imprimiendolas y viendolas en console en el navegador
console.log("\"5\" == 5:", "5" == 5);
console.log("\"5\" === 5:", "5" === 5);
console.log("0 == false:", 0 == false);
console.log("0 === false:", 0 === false);
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);
console.log("true == 1:", true == 1);
console.log("true === 1:", true === 1);
console.log("\"\" == 0:", "" == 0);
console.log("\"\" === 0:", "" === 0);
console.log("\"0\" == false:", "0" == false);
console.log("\"0\" === false:", "0" === false);


// ejercicio 10 literales (arrays en java)
// Definir un literal que represente una canción
let cancion1 = { nombre: "Song 1", duracion: 150, puntuacion: 4.5 };
let cancion2 = { nombre: "Song 2", duracion: 90, puntuacion: 3.8 };
let cancion3 = { nombre: "Song 3", duracion: 200, puntuacion: 4.9 };
let cancion4 = { nombre: "Song 4", duracion: 180, puntuacion: 4.2 };
let cancion5 = { nombre: "Song 5", duracion: 110, puntuacion: 3.5 };

// Crear un array de canciones
let canciones = [cancion1, cancion2, cancion3, cancion4, cancion5];

// Mostrar la cuarta canción
console.log("Cuarta canción:", canciones[3]);

// Mostrar todas las canciones usando forEach
console.log("Lista de canciones:");
canciones.forEach((cancion, index) => {
    console.log(`${index + 1}. ${cancion.nombre} - ${cancion.duracion}s - ${cancion.puntuacion}⭐`);
});

// Mostrar la longitud del array
console.log("Número total de canciones:", canciones.length);

// Buscar las canciones que duren más de 120 segundos y mostrarlas
const cancionesLargas = canciones.filter(cancion => cancion.duracion > 120);
console.log("Canciones con más de 120 segundos:");
console.log(cancionesLargas);

// 11. ejercicio funcion

function saludar(nombre) {
    return "Hola, " + nombre + "!";
}

console.log(saludar("Juan")); // "Hola, Juan!"
