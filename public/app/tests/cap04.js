const carnavalizar = adereco => texto => `${adereco}${texto}${adereco}`;
const resultado = carnavalizar('@')('Nota 10');

console.log(resultado);

const fn = array => () => array.reverse();
const numbers = [1,2,3,4,5,6];
const reverse = fn(numbers);
reverse();
console.log(reverse());