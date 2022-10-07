import {ProductModel} from './product.model';

export class Item {
    products: ProductModel[];

    constructor(products: ProductModel[]) {
        this.products = products;
    }

    /** metodo para odernedar los productos por la descripcion*/
    orderByDescription():void{

    }

    /** metodo va devolver una lista de ProductModel[] donde el precio se modificara para que el nuevo valor solo sea 90% del precio original*/
    newPrice():ProductModel[]{
        return [];
    }

    /**metodo para devolver los productos que su precio sea mayor que 100 */
    productOver100Price():ProductModel[]{
        return [];
    }


}