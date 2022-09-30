export interface Plato {
    principal: string;
    postre: string;
    precio: number;
}

export class Arreglo {
    public numbers: number[];

    constructor(numbers: number[]) {
        this.numbers = numbers;
    }

    public ordernarDeMenorAMayor(): number[] {
        return this.numbers.sort((a: number, b: number) => {
            return a - b;
        });
    }

    public ordernardeMayorAMenor(numbers: number[]): number[] {
        return numbers.sort((a: number, b: number) => {
            return b - a;
        });
    }

    public getPrincipal(platos: Plato[]): any {
        return platos.map((plato: Plato) => {
            return {postre: plato.postre, precio: plato.precio / 2};
        });
    }

    public ordenarPorPostre(platos: Plato[]): Plato[] {
        return platos.sort((a: Plato, b: Plato) => {
            if (a.postre > b.postre) {
                return 1;
            }
            if (a.postre < b.postre) {
                return -1;
            }
            return 0;
        });
    }

    public ordenarPorPostreZA(platos: Plato[]): Plato[] {
        return platos.sort((a: Plato, b: Plato) => {
            if (a.postre < b.postre) {
                return 1;
            }
            if (a.postre > b.postre) {
                return -1;
            }
            return 0;
        });
    }


}