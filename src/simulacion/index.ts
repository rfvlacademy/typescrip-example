import {ShoppingCart} from './ShoppingCart';
import {ProductModel} from './product.model';

let products: ProductModel[] = [
    {name: 'wallet', price: 69.99, description: 'wallet made from steal', code: 'wa-01'},
    {name: 'nokia 7.2', price: 309.99, description: 'nokia 7.2 color blue with 128gb on memory', code: 'cel-11'},
    {name: 'dell inspiron', price: 789.01, description: 'dell inpsiron intel i5-10830u with 8gb of ram', code: 'del02'}
];

const shoppingCart: ShoppingCart = new ShoppingCart(products);
// el descuento tiene que ser de 30$ para todo los productos
// imprimir el resultado entregado por el metodo getProductsUnder50
// el metodo addDiscount tiene que utilizar el arreglo devuelto por el metodo orderProductByPrice
// el metodo getProductsUnder50 tiene que utilizar el arreglo devuelto por el metodo addDiscount
// el unico metodo publico es getProductsUnder50 los dos otros metodos son private asta finalizar el codigo
// todo los metodos puede ser publicos para que puedan verificar si los metodos esta desarrollados de forma correcta.
console.log(shoppingCart.getProductsUnder50());