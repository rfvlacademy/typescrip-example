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

    private obtenerProductosConIva12() {
        return this.productos.filter((product) => product.iva === 12);
    }

    filtrarPorDescripcion(descripcion: string) {
        return this.productos.filter((producto) => producto.description.includes(descripcion));
    }

    calcularPrecioConIva12() {
        let productos = this.obtenerProductosConIva12();
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

    calcularIva12() {
        return this.obtenerProductosConIva12().map((producto) => {
            let ivaCalc = producto.precio * (producto.iva / 100);
            return {
                name: producto.name,
                codigo: producto.codigo,
                description: producto.description,
                precio: producto.precio,
                iva: ivaCalc
            };
        });
    }

    ordernarPorDescripcionAZ(productos: Productos[]) {
        return productos.sort((a, b) => {
            if (a.description > b.description) {
                return 1;
            }
            if (a.description < b.description) {
                return -1;
            }
            return 0;
        });
    }

}