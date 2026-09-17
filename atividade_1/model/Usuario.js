export class Usuario {
    #funcao;
    constructor(nome, funcao) {
        this.nome = nome;
        this.#funcao = funcao;
    }

    get getFuncao() {
        return this.#funcao;
    }
}