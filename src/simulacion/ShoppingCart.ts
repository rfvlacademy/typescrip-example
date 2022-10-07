import {ProductModel} from './product.model';

export class ShoppingCart {
    private products: ProductModel[];

    constructor(products: ProductModel[]) {
        this.products = products;
    }


    /** Esta función deve devolver ordenados los productos de forma descendente mediante el precio(usar sort)*/
    private orderProductByPrice(): void {
        this.products.sort((a, b) => {
            return a.price - b.price;
        });
    }

    /** Esta función deve aplicar el descuento a los prodyctos modificando el precio (usar map)*/
    private addDiscount(discount: number): ProductModel[] {
        this.orderProductByPrice();
        return this.products.map((product) => {
            let newPrice = product.price - discount;
            return {
                name: product.name,
                code: product.code,
                description: product.description,
                price: newPrice
            };
        });
    }

    /** Esta función deve devolver los productos que su precio sea menor de 50 (usar filter)*/
    getProductsUnder50(): ProductModel[] {
        let products = this.addDiscount(30);
        return products.filter(product => product.price < 50);
    }
}