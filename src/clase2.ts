import {Productos, Ejemplo2} from './Ejemplos2';

let productos: Productos[] = [
    {
        name: 'billetera',
        codigo: '1',
        description: 'negro',
        precio: 10.99,
        iva: 12
    },
    {
        name: 'foco',
        codigo: '2',
        description: 'blanco',
        precio: 2.99,
        iva: 0
    },
];

let ejemplo2 = new Ejemplo2(productos);
console.log(ejemplo2.filtrarPorDescripcion('blanco'));
let productoConIva = ejemplo2.calcularPrecioConIva12();
let productosConIvaO = ejemplo2.obtenerProductosConIva0();
console.log('iva12', productoConIva);
console.log('iva0', productosConIvaO);
let unidos = productoConIva.concat(productosConIvaO);
console.log('unidos', unidos);
console.log('ordenado', ejemplo2.ordernarPorDescripcionAZ(unidos));
console.log(ejemplo2.calcularIva12());