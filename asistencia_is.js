var asistencias = [true,false,true,false,true,false,true,true,false];
var suma = 0;
var porcentaje = 0;
var verdaderos = 0;

for(let i=0;i<asistencias.length;i++){
    if (asistencias[i] = true){
        suma++
    }
}

porcentaje = suma / asistencias.length;

console.log("tu porcentaje de asistencias es " + porcentaje);
