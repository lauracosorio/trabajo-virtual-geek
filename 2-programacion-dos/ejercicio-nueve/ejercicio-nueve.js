const friendElement = document.querySelector('h3');

const name = "Maria Clara Restrepo";
const length = name.length;

friendElement.innerHTML = `
<h3> El nombre de mi compañera es ${name} y está compuesto por ${name.length}  caracteres.` 
