const cali=[5,4,3];
let total = 0;

for (let i=0; i>cali.length; i++){
    total += cali[i];
    const prom = total/cali.length;
    console.log("tu promedio es" + prom);
}

if(prom>=8){
    console.log("Pasaste!")
}
else{
    console.log("Reprobaste!")
}