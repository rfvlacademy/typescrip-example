import {Item} from './Item';
import {ProductModel} from './product.model';

let products: ProductModel[] = [
    {name: 'wallet', price: 69.99, description: 'wallet made from steal', code: 'wa-01'},
    {name: 'nokia 7.2', price: 309.99, description: 'nokia 7.2 color blue with 128gb on memory', code: 'cel-11'},
    {name: 'dell inspiron', price: 789.01, description: 'dell inpsiron intel i5-10830u with 8gb of ram', code: 'del02'}
];

const item: Item = new Item(products);