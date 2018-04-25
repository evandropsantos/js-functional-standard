import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js'; 
import { takeUntil, debounceTime } from './utils/operators.js';

// import { filteredNumbers, newNumbers, sum } from './tests/cap02.js';
// import { ehDivisivel, ehDivisivelPorDois } from './tests/cap03.js';
// import './tests/cap04.js';

const operation1 = takeUntil(3, () => 
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log)
);

const operation2 = debounceTime(500, operation1);

document.querySelector('#myButton').onclick = operation2;
    

