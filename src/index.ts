import {Arreglo, Plato} from './arreglo';

let numbers: number[] = [-5, 10, 6, 9];

function printNumbers(numbers: number[]): void {
    numbers.forEach((number: number, index: number) => console.log(index, number));
}

let platos: Plato[] = [{principal: 'hamburguesa', postre: 'torta', precio: 10.5}, {
    principal: 'pizza',
    postre: 'helado',
    precio: 12.5
}];

const arreglo = new Arreglo(numbers);
printNumbers(numbers);
console.log(arreglo.ordernarDeMenorAMayor());
console.log(arreglo.ordernardeMayorAMenor([-5, 10, 6, 9]));
console.log(arreglo.getPrincipal(platos));
console.log(arreglo.ordenarPorPostre(platos));
console.log(arreglo.ordenarPorPostreZA(platos));