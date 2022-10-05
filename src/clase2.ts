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
        description: '',
        precio: 2.99,
        iva: 0
    },
];

let ejemplo2 = new Ejemplo2(productos);
console.log(ejemplo2.obtenerProductosConIva0());
console.log(ejemplo2.obtenerProductosConIva12());