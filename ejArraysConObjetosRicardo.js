function alumnosAprobados() {
let promedio = 0;
let alumnos = [{

  name: "José",
  calificaciones: [8,7,6]
}, {
  name: "Javier",
  calificaciones: [4,7,9]
}, {
  name: "María",
  calificaciones: [8,9,10]
}, {
  name: "Martha",
  calificaciones: [4,5,5]
}]

for (let i = 0 ; i<alumnos.length ; i++) {
promedio = (alumnos[i]["calificaciones"].reduce((x,z)=>x+z))/alumnos[i]["calificaciones"].length;

  if (promedio>=6 ) {
    alert("Alumnos que aprobaron el curso: "+alumnos[i].name);
  } else {
    alert("Alumnos que deberán repetir el curso: "+alumnos[i].name);
  }
  }
}

// AHORA CADA ALUMNO TIENE SU NOMBRE; LISTA DE MATERIAS = NOMBRE MATERIA Y CALIF.
//HACER PROGRAMA QUE INDIQUE EL NOMBRE DE LAS MATERIAS REPROBADAS Y EL ALUMNO
function materiasReprobadas() {
let reprobadosHistoria = 0;
let reprobadosMate = 0;
let reprobadosFisica = 0;
let alumnos = [{

  name: "José",
  historia: 8,
  mate: 7,
  fisica: 5
}, {
  name: "Javier",
  historia: 4,
  mate: 5,
  fisica: 6
}, {
  name: "María",
  historia: 8,
  mate: 5,
  fisica: 4
}, {
  name: "Martha",
  historia: 3,
  mate: 5,
  fisica: 6
}]

for (let i = 0 ; i<alumnos.length ; i++) {
  reprobadosHistoria= alumnos[i]["historia"];

  if(reprobadosHistoria<6){
    alert("Historia fue reprobada por: "+alumnos[i].name);
  }
  }

for (let o = 0 ; o<alumnos.length ; o++) {
  reprobadosMate= alumnos[o]["mate"];

  if(reprobadosMate<6){
    alert("Matemáticas fue reprobada por: "+alumnos[o].name);
  }
  }

for (let u = 0 ; u<alumnos.length ; u++) {
  reprobadosFisica= alumnos[u]["fisica"];

  if(reprobadosFisica<6){
    alert("Física fue reprobada por: "+alumnos[u].name);
  }
  }
}
