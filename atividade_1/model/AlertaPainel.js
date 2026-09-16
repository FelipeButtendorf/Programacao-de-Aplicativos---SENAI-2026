import { Alerta } from "./Alerta.js";

export class AlertaPainel extends Alerta{
    #nomeSetor;

    constructor(mensagem, prioridade, nomeSetor){
        super(mensagem, prioridade),
        this.#nomeSetor = nomeSetor
    }

    get getNomeSetor(){
        return this.#nomeSetor;
    }

    enviar(){
        console.log(`Exibindo a mensagem: ${this.getmensagem} no setor: ${this.#nomeSetor}`)
    }
}