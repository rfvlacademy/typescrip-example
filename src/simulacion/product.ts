import {ProductModel} from './product.model';

export class Product {
    private products: ProductModel[];

    constructor(products: ProductModel[]) {
        this.products = products;
    }


    /** Esta función deve devolver ordenados los productos de forma descendente mediante el precio(usar sort)*/
    orderProductByPrice() {
    }

    /** Esta función deve aplicar el descuento a los prodyctos modificando el precio (usar map)*/
    addDiscount(discount: number) {
    }

    /** Esta función deve devolver los productos que su precio sea menor de 50 (usar filter)*/
    getProductsUnder50() {
    }
}