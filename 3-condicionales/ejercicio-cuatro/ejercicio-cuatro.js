'use strict'

var age = 0;

age = parseInt(prompt("Ingrese la edad de su perro: "));

if (age === 1) {
    console.log("Su perro tiene 15 años");
} else if (age === 2) {
    age = 15 + 9
    console.log ("Su perro tiene " + age + " años");
} else if (age > 2) {
    age = (age * 5) + 15 + 9 -10; 
    console.log("Su perro tiene " + age + " años");
}
