import { Encomenda } from "./Encomenda.js";

export class EncomendaConvite extends Encomenda {

    #evento;
    constructor(descricao, quantidade, evento) {
        super(descricao, quantidade);
        this.#evento = evento;
    }

    get getEvento() {
        return this.#evento;
    }

    produzir() {
        console.log(`Produzindo o convite para o evento ${this.getEvento} com a descrição: ${this.getDescricao}, e quantidade: ${this.getQuantidade}`);
    }
}