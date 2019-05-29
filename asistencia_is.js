var asistencias = [0,1,1,0,1,0,1,1,0];
var suma = 0;
var porcentaje = 0;

for(let i=0;i>asistencias.length;i++){
    suma +=asistencias[i];
}

porcentaje = suma / asistencias.length;

console.log("tu porcentaje es" + porcentaje);
