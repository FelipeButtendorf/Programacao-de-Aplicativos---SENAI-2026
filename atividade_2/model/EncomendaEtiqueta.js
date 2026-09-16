import { Encomenda } from "./Encomenda.js";

export class EncomendaEtiqueta extends Encomenda {

    #produto;
    constructor(descricao, quantidade, produto) {
        super(descricao, quantidade);
        this.#produto = produto;
    }  

    get getProduto() {
        return this.#produto;
    } 

    produzir() {
        console.log(`Produzindo a etiqueta do produto ${this.getProduto} com a descrição: ${this.getDescricao}, e quantidade: ${this.getQuantidade}`);
    }
}