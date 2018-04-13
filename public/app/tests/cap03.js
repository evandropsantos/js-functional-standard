export const ehDivisivel = (divisor, numero) => !(numero % divisor);

export const ehDivisivelPorDois = ehDivisivel.bind(null, 2);

console.log( 'ehDivisivel', ehDivisivel(2, 10) ); 
console.log( 'ehDivisivel', ehDivisivel(2, 15) ); 
console.log( 'ehDivisivel', ehDivisivel(2, 20) );

console.log( 'ehDivisivelPorDois', ehDivisivelPorDois(10) ); 
console.log( 'ehDivisivelPorDois', ehDivisivelPorDois(15) ); 
console.log( 'ehDivisivelPorDois', ehDivisivelPorDois(20) );