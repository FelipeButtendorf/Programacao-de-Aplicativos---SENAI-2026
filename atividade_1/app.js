import {AlertaSMS} from "./model/AlertaSMS.js";
import {AlertaEmail} from "./model/AlertaEmail.js";
import {AlertaPainel} from "./model/AlertaPainel.js";
import {Usuario} from "./model/Usuario.js";

const usuario = new Usuario("Fulano", "Analista");

const sms = new AlertaSMS(
    "Seu cartão foi clonado, click no link abaixo", 
    "Alta",
    usuario,
    "47 948928383"
);

const email = new AlertaEmail(
    "Boa tarde, Gostaria de informa que na sexta feita haverá aula",
    "Média",
    usuario,
    "fulano@gmail.com"
);

const painel = new AlertaPainel(
    "Aula de POO na sala B210",
    "Baixo",
    usuario,
    "B210"
);

painel.alterarPrioridade("Alta");

const alertas = [sms, email, painel];

for (let i = 0; i < alertas.length; i++){
    const alerta = alertas[i];
    alerta.enviar();
}