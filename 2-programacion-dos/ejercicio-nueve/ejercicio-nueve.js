const friendElement = document.querySelector('h3');

var name = "Maria Clara Restrepo";
var withoutSpace = name.replace(/ /g,""); //Para quitar los espacios y el length no los cuente 
var length = withoutSpace.length;


friendElement.innerHTML = `
<h3> El nombre de mi compañera es ${name} y está compuesto por ${length} caracteres.` 
