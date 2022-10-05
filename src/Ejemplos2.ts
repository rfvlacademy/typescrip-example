export interface Productos {
    name: string;
    codigo: string;
    description: string;
    precio: number;
    iva: number;
}

export class Ejemplo2 {
    private productos: Productos[];

    constructor(productos: Productos[]) {
        this.productos = productos;
    }

    obtenerProductosConIva0() {
        return this.productos.filter((product) => product.iva === 0);
    }

    obtenerProductosConIva12() {
        return this.productos.filter((product) => product.iva === 12);
    }
}