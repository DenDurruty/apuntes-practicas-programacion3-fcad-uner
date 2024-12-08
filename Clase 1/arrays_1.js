// Clase 1
// 00:37:00 "ARRAYS"

/*
- Para crear un array (arreglo) podemos utilizar los corchetes o el constructor array.

*/


// Ejemplo 1
let frutas = ["naranja", "sandía", "mango"];
console.log(frutas);


// Ejemplo 2
let alumnos = new Array("Juan", "José", "Carla", "Lara");
console.log(alumnos);



// Ejemplo 3
let varios = ["Gustavo", 10, {id: 1, usuario: "Julian"}, true];
console.log(varios);


// Cómo acceder a un elemento del arreglo "varios"?
console.log(varios[0]);
console.log(varios[1]);
console.log(varios[2]);
console.log(varios[3]);


// Cómo saber cuántos elementos tiene el arreglo "varios"?
console.log(varios.length); // Devuelve "4" que es la cantidad de elementos


// Cómo acceder al último elemento del arreglo "varios"?
console.log(varios[varios.length - 1]); // Devuelve "true" que es el elemento de índice 3


// CÓMO RECORREMOS UN ARREGLO?
// Con FOR
for(let i = 0; i < varios.length; i++) {
    console.log("Este es el elemento de índice: " + i);
    console.log(varios[i]);

}


// Con FOR... OF
for(let v of varios) {
    console.log(v);
}


// Con FOREACH
varios.forEach(function(v, indice) {
    console.log(`El elemento ${v} está ubicado en la posición ${indice}`);
})


// node arrays_1.js
