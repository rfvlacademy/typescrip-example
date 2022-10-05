import {Productos, Ejemplo2} from './Ejemplos2';

let productos: Productos[] = [
    {
        name: 'billetera',
        codigo: '1',
        description: '',
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
let productosConIva12 = ejemplo2.obtenerProductosConIva12();
console.log(ejemplo2.obtenerProductosConIva0());
console.log(productosConIva12);
console.log(ejemplo2.filtrarPorDescripcion('blanco'));
console.log(ejemplo2.calcularPrecioConIva(productosConIva12));