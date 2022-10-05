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

    filtrarPorDescripcion(descripcion: string) {
        return this.productos.filter((producto) => producto.description.includes(descripcion));
    }

    calcularPrecioConIva(productos: Productos[]) {
        return productos.map((producto) => {
            return {
                name: producto.name,
                codigo: producto.codigo,
                description: producto.description,
                precio: producto.precio * ((100 + producto.iva) / 100),
                iva: producto.iva
            };
        });
    }

}