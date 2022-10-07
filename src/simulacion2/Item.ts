import {ProductModel} from './product.model';

export class Item {
    products: ProductModel[];

    constructor(products: ProductModel[]) {
        this.products = products;
    }

    /** metodo para odernedar los productos por la descripcion*/
    private orderByDescription(): void {
        this.products.sort((a, b) => {
            if (a.description > b.description) {
                return 1;
            } else if (a.description < b.description) {
                return -1;
            } else {
                return 0;
            }

        });
    }

    /** metodo va devolver una lista de ProductModel[] donde el precio se modificara para que el nuevo valor solo sea 90% del precio original*/
   private newPrice(): ProductModel[] {
        this.orderByDescription();
        return this.products.map((product)=>{
            let newPrice= product.price*0.9;
            return {
                name:product.name,
                description:product.description,
                code:product.code,
                price:newPrice
            }
        })
    }

    /**metodo para devolver los productos que su precio sea mayor que 100 */
    productOver100Price(): ProductModel[] {
        let products= this.newPrice();
        return products.filter((product)=>product.price>100);
    }


}