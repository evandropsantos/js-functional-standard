import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js'; 

// import { filteredNumbers, newNumbers, sum } from './tests/cap02.js';
// import { ehDivisivel, ehDivisivelPorDois } from './tests/cap03.js';

document.querySelector('#myButton').onclick = () => 
    service.sumItems('2143')
    .then(console.log)
    .catch(console.log);

