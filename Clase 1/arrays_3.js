// Clase 1
// 01:18:00 y 01:21:00 "ARRAYS AVANZADOS"

/*
- Métodos avanzados:
.filter()
.map()
.find()
.findIndex()
.reduce()

*/


// Ejemplo 
let alumnos = [
    {
        nombre: "Luis",
        edad: 20

    },
    {
        nombre: "Mónica",
        edad: 22

    },
    {
        nombre: "Gustavo",
        edad: 25

    },
    {
        nombre: "Lara",
        edad: 21

    },

];


// Ejemplo - .filter()
let alumnosMayores = alumnos.filter(alumno => alumno.edad > 22);
console.log(alumnosMayores);

/* .FILTER()
El método filter se utiliza para crear un nuevo array con todos los elementos que pasen una 
prueba determinada por una función. En este caso, la prueba es (alumno => alumno.edad > 22).

La función de flecha (alumno => alumno.edad > 22) devuelve true para aquellos alumnos cuya edad
sea mayor que 22. Esto significa que solo se incluirán en el nuevo array alumnosMayores aquellos 
alumnos que cumplan esta condición.

*/


// Ejemplo - .map()
let nombreAlumnosMayores = alumnosMayores.map(alumno => alumno.nombre);
console.log(nombreAlumnosMayores);

/* .MAP()
El método map se utiliza para crear un nuevo array llamando a una función de devolución de llamada 
proporcionada en cada elemento del array original.

La función de flecha (alumno => alumno.nombre) se aplica a cada elemento del array alumnosMayores. 
En este caso, cada elemento es un objeto alumno.

La función extrae la propiedad nombre de cada alumno y crea un nuevo array con esos nombres. 

*/


// Ejemplo - .find()
let primero = alumnos.find(alumno => alumno.edad > 21);
console.log(primero); 

/* .FIND()
El método find se utiliza para encontrar el primer elemento en un array que cumple con una 
condición especificada por una función de prueba.

La función de flecha (alumno => alumno.edad > 21) se aplica a cada elemento del array alumnos
hasta que encuentra un elemento que cumpla la condición edad > 21.

Detalles:
alumno => alumno.edad> 21: Esta función de flecha toma un alumno del array alumnos y devuelve 
true si la edad del alumno es mayor que 21.

find devuelve el primer elemento que cumple con la condición. Si no encuentra ningún elemento, 
devuelve undefined.

*/


// Ejemplo - .findIndex()
let indicePrimero = alumnos.findIndex(alumno => alumno.edad > 22);
console.log(indicePrimero); 

/* .FINDINDEX()
El método findIndex se utiliza para encontrar el índice del primer elemento en un array que cumple 
con una condición especificada por una función de prueba.

La función de flecha (alumno => alumno.edad > 22) se aplica a cada elemento del array alumnos hasta 
que encuentra un elemento que cumple la condición edad > 22.

Detalles:
alumno => alumno.edad> 22: Esta función de flecha toma un alumno del array alumnos y devuelve true si 
la edad del alumno es mayor que 22.

findIndex devuelve el índice del primer elemento que cumple con la condición. Si no encuentra ningún 
elemento, devuelve -1.

*/


// Ejemplo - .reduce()
let totalEdad = alumnos.reduce((suma, alumno) => suma + alumno.edad, 0); 
console.log(totalEdad);

/* .REDUCE()
Explicación:
1) alumnos.reduce: Llamamos al método reduce en el array alumnos.

2) Función de Reducción: La función (suma, alumno) => suma + alumno.edad 
se ejecuta para cada elemento del array:

- suma: Es el acumulador, que mantiene el valor acumulado a lo largo de las iteraciones.
- alumno: Es el elemento actual del array.
- suma + alumno.edad: En cada iteración, sumamos la edad del alumno actual al acumulador suma.

3) Valor Inicial: El segundo argumento 0 es el valor inicial del acumulador suma.


ITERACIONES:
Primera Iteración: suma = 0 + 20 (Luis)
Segunda Iteración: suma = 20 + 22 (Mónica)
Tercera Iteración: suma = 42 + 25 (Gustavo)
Cuarta Iteración: suma = 67 + 21 (Lara)

El valor final de suma es 88, que es la suma de las edades de todos los alumnos.

*/


// node arrays_3.js