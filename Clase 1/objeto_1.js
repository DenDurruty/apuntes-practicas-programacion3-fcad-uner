// Clase 1
// 01:21:00 "OBJETOS"

/*
- Objetos

*/


let alumno = {
    matricula: 123,
    nombre: "Ignacio Novello",
    conocimiento: 70,
    //materiasAprobadas: 1,
    
    estudiar: function() {
        this.conocimiento = this.conocimiento + 5;

    }
}

console.log(alumno);
console.log(`${alumno.nombre} tiene un conocimiento de ${alumno.conocimiento}`);
alumno.estudiar();
console.log(`${alumno.nombre} tiene un conocimiento de ${alumno.conocimiento}`);

// node objeto_1.js