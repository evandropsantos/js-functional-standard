const carnavalizar = adereco => texto => `${adereco}${texto}${adereco}`;
export const resultado = carnavalizar('@')('Nota 10');

console.log(resultado);