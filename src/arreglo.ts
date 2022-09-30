export interface Plato {
    principal: string;
    postre: string;
    precio:number;
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
            return {principal:plato.principal,postre:plato.principal,precioConIva:plato.precio*1.12};
        });
    }


}