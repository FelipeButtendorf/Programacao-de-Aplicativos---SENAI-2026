import { Alerta } from './Alerta.js';

export class AlertaEmail extends Alerta {

    #email
    constructor(mensagem, prioridade, email) {
        super(mensagem, prioridade);
        this.#email = email;
    }

    get getEmail() {
        return this.#email;
    }

    enviar() {
        console.log(`Enviando a ${this.getmensagem} para o destinatario ${this.#email}`);
    }
}