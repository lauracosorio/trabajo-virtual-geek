let añosVividos = 0;
let diasPorAño = 365;
let horasPorDia = 24;

añosVividos =parseInt(prompt("Ingrese su edad en números: "));

horasTotalVividas = añosVividos * diasPorAño * horasPorDia;
 
console.log("Durante sus " + añosVividos + " años usted ha vivido " + horasTotalVividas +" horas");