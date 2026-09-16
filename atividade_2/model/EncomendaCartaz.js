import { Encomenda } from "./Encomenda.js";

export class EncomendaCartaz extends Encomenda {

    #tamanho;
    constructor(descricao, quantidade, tamanho) {
        super(descricao, quantidade);
        this.#tamanho = tamanho;
    }

    get getTamanho() {
        return this.#tamanho;
    }

    produzir() {
        console.log(`Produzindo o cartaz de tamanho ${this.getTamanho}, com a descrição: ${this.getDescricao}, e quantidade: ${this.getQuantidade}`);
    }
}