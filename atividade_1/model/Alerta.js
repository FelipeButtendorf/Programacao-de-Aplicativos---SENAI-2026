export class Alerta {

    #mensagem;
    #prioridade;
    constructor(mensagem, prioridade) {
        this.mensagem = mensagem;
        this.prioridade = prioridade;
    }
    
    get getmensagem() {
        return this.#mensagem;
    }

    get getprioridade() {
        return this.#prioridade;
    }

    alterarPrioridade(novaPrioridade) {
        if(novaPrioridade === 'alta' || novaPrioridade === 'media' || novaPrioridade === 'baixa') {
            this.#prioridade = novaPrioridade;
            return true;
        }
        return false;
    }

    enviar() {
        throw new Error('o método não foi implementado na classe filha');
    }
}