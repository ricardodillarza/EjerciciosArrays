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

console.log("aprobaste" + aprobado + "y reprobaste" + reprobado);
