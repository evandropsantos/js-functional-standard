import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js'; 
import { takeUntil } from './utils/operators.js';


const operation1 = takeUntil(3, () => 
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log)
);

// import { filteredNumbers, newNumbers, sum } from './tests/cap02.js';
// import { ehDivisivel, ehDivisivelPorDois } from './tests/cap03.js';
import { resultado } from './tests/cap04.js';

document.querySelector('#myButton').onclick = operation1;
    

