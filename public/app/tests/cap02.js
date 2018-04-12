const numbers = [1,2,3,4,5,6,7,8,9,10];

// Teste Filter
export const filteredNumbers = numbers.filter(number => number % 2);

// Teste Map
export const newNumbers = numbers.map( number => {
    if(number % 2) return ++number;
    return number;
});

// Teste Reduce
export const sum = numbers.reduce( (previous, number) => previous + number, 0);

const scream1 = 'Leeroy Jenkins!';

// Teste prototype
String.prototype.shout = function() { alert(this); };

const scream2 = 'Atheon, raid Boss!';
scream1.shout();
scream2.shout();

// Consoles
console.log('Filter ', filteredNumbers);
console.log('Map ', newNumbers);
console.log('Reduce ', sum);