// Clase 1
// 01:05:00 "ARRAYS COMUNES"

/*
- Métodos comunes:
.push()
.pop()
.shift()
.unshift()
.length
.Slice()
.splice()

*/


// Ejemplo 1
let alumnos = ["Luis", "Enrique", "Joel", "Sofía", "Leandro"];
console.log(alumnos);

// Cómo agregamos otro alumno al final del arreglo? .push()
alumnos.push("Nahuel");
console.log(alumnos);

// Cómo quitamos un alumno del final del arreglo? .pop()
alumnos.pop();
console.log(alumnos);

// Cómo quitamos al primer alumno del arreglo? .shift()
alumnos.shift();
console.log(alumnos);

// Cómo agregamos un alumno adelante del arreglo? .unshift()
alumnos.unshift("Mónica");
console.log(alumnos);

// Cómo retornar la longitud del arreglo? .length
console.log(alumnos.length);

// Cómo retornar una copia de una parte del array en un nuevo array? .slice
let nuevaListaAlumnos = alumnos.slice(1, 4);
console.log(nuevaListaAlumnos); // ["Enrique", "Joel", "Sofia"] porque incluye el primer indice dado (1), pero no el último (4)
nuevaListaAlumnos = alumnos.slice(0, 2); // ["Mónica", "Enrique"]
console.log(nuevaListaAlumnos);

// Cómo agregar o eliminar elementos del array? .splice
// Eliminar
alumnos.splice(1, 2); // Eliminar a Enrique (1) y Joel (2)
console.log(alumnos); // [ 'Mónica', 'Sofía', 'Leandro' ]

// Agregar
alumnos.splice(2, 0, "Noelia", "Denise"); // Agregar a Noelia y Denise en el índice 2
console.log(alumnos); // [ 'Mónica', 'Sofía', 'Franco', 'Florencia', 'Leandro' ]

// Reemplazar
alumnos.splice(2, 2, "Franco", "Florencia"); // Reemplazar a Noelia y Denise por Franco y Florencia
console.log(alumnos); [ 'Mónica', 'Sofía', 'Franco', 'Florencia', 'Leandro' ]


// node arrays_2.js