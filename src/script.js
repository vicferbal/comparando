//ejercicio 9
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

// 12. ejemplos de pasar valores en una funcion o por referencia
// por valor
function modificar(numero) {
    numero = 10; // Modificamos la copia
}

let x = 5;
modificar(x);
console.log(x); // Imprime 5, la variable original no cambió

// por referencia

function modificarObjeto(persona) {
    persona.nombre = "Carlos"; // Modifica el objeto original
}

let persona = { nombre: "Ana" };
modificarObjeto(persona);
console.log(persona.nombre); // Imprime "Carlos"

// Ejercicio 14 . Funciones 
// suma de un array
let numeros = [1,2,3,4,5];
function suma (numeros){
let suma = 0;
for (let numero of numeros){
    suma += numero;
}
return suma;

}
console.log(suma(numeros));

// Función que calcula la factorial de un número de forma iterativa.
function factorial (n){
    if (n<0) 
        return "no negativo";
    let resultado = 1
    for( let i = 1; i<=n;i++){
        resultado *=i;
    }
    return resultado;
}
//ejemplo
console.log(factorial(5));

// Factorial de manera recursiva
function factorial(n) {
    if (n < 0) return "No existe factorial de un número negativo"; // Manejo de error
    if (n === 0 || n === 1) return 1; // Caso base
    return n * factorial(n - 1); // Llamada recursiva
}

// Ejemplo de uso
console.log(factorial(5)); // Imprime 120
console.log(factorial(0)); // Imprime 1 (por definición)
console.log(factorial(-3)); // Imprime el mensaje de error

// dado un array de canciones calula la duracion media de las canciones
function calcularDuracionMedia(canciones) {
    if (canciones.length === 0) return "0:00"; // Evitar división por 0

    let totalSegundos = 0;

    for (let tiempo of canciones) {
        let [minutos, segundos] = tiempo.split(":").map(Number);
        totalSegundos += minutos * 60 + segundos;
    }

    let duracionMedia = Math.floor(totalSegundos / canciones.length);
    let minutosMedios = Math.floor(duracionMedia / 60);
    let segundosMedios = duracionMedia % 60;

    return `${minutosMedios}:${segundosMedios.toString().padStart(2, "0")}`;
}

// Ejemplo de uso
let listaCanciones = ["3:45", "4:20", "2:30", "5:15"];
console.log(calcularDuracionMedia(listaCanciones)); // Imprime "3:57"


