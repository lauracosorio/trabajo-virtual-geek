'use strict'

const firstDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://dog.ceo/api/img/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const thirdDogName = 'Lana';

const listElement = document.querySelector('.list');
// const content = '<li>`${firstDogImage}${firstDogName}`</li><li>2</li><li>3</li>';

listElement.innerHTML = 
`<li>${firstDogImage} ${firstDogName}</li>
<li>${secondDogImage} ${secondDogName}</li>
<li>${thirdDogImage} ${thirdDogName}</li>`;