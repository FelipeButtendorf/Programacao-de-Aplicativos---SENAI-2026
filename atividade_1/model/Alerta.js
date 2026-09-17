export class Alerta {

    #mensagem;
    #prioridade;
    #usuario;

    constructor(mensagem, prioridade, usuario) {
        this.#mensagem = mensagem;
        this.#prioridade = prioridade;
        this.#usuario = usuario;
    }
    
    get getmensagem() {
        return this.#mensagem;
    }

    get getprioridade() {
        return this.#prioridade;
    }

    get getUsuario() {
        return this.#usuario;
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