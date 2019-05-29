function promedio1() {

let calificaciones = [8, 8, 8, 8, 8];
let sumaCalificaciones = 0;

for (let contador = 0 ; contador < calificaciones.length ; contador++) {
  sumaCalificaciones += calificaciones[contador];
  }

let promedio = sumaCalificaciones/calificaciones.length;

if (promedio >=8) {
  alert("Puedes obtener una beca este año");
  } else {
  alert("No alcanzaste el promedio mínimo para obtener una beca");
  }
}

function AsistenciaClases() {
let clasesSemana = [true, true, false, false, true];
let asistencias = 0;
let faltas = 0;
let porcentajeAsistencias = 0;
  for (let contador = 0 ; contador < clasesSemana.length ; contador++) {
    if (clasesSemana[contador]) {
      asistencias++;
    } else {
      faltas++;
    }
  }
porcentajeAsistencias = (asistencias/clasesSemana.length)*100;
alert("Esta semana asististe al "+porcentajeAsistencias+"% de tus clases." );
}

function examenes() {
let calificaciones = [4, 4, 5, 5, 3];
let aprobados = 0;
let repetirExamen = 0;
let reprobados = 0;
  for (let contador = 0 ; contador < calificaciones.length ; contador++) {
    if (calificaciones[contador]<6) {
      reprobados++;
    } else {
      aprobados++;
    }
  }
repetirExamen = reprobados;
alert("Aprobaste "+aprobados+" examenes y tendrás que repetir "+reprobados+".")
}
