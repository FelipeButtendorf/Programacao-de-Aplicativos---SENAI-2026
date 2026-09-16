import { Alerta } from "./Alerta.js";

export class AlertaSMS extends Alerta{
    #telefone;
    constructor(mensagem, prioridade, telefone){
        super(mensagem, prioridade),
        this.#telefone = telefone
    }

    get getTelefone(){
        return this.#telefone;
    }

    enviar(){
        console.log(`Enviando SMS para ${this.getTelefone} com a mensagem: ${this.getmensagem}`)
    }
}