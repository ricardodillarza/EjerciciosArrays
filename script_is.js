function prom(){
    const cali=[5,4,3];
    let total = 0;

    for (let i=0; i<cali.length; i++){
        total += cali[i];
    }

    let prom = total/cali.length;
    console.log("tu promedio es " + prom);

    if(prom>=8){
        console.log("Pasaste!")
    }
    else{
        console.log("Reprobaste!")
    }
}

function examenes(){
    examenes = [3,4,7,8,10,3,2,4,6]
    let aprobado=0;
    let reprobado=0;

    for (let i =0;i<examenes.length;i++){
        if (examenes[i]>=8){
            aprobado++;
        }
        else {
            reprobado++;
        }
    }

    console.log("aprobaste " + aprobado + " y reprobaste " + reprobado);

}

function asistencia(){
    var asistencias = [0,1,1,0,1,0,1,1,0];
    var suma = 0;
    var porcentaje = 0;

    for(let i=0;i<asistencias.length;i++){
        suma +=asistencias[i];
    }

    porcentaje = suma / asistencias.length;
    console.log("tu porcentaje es " + porcentaje);
}