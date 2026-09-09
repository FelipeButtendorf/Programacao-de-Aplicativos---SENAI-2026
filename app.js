import {PagamentoCartao} from "./model/PagamentoCartao.js";
import {PagamentoPix} from "./model/PagamentoPix.js";
import {PagamentoBoleto} from "./model/PagamentoBoleto.js";

const pix = new PagamentoPix(1000, "kk");
const cartao = new PagamentoCartao(500, 3244, 2);
const boleto = new PagamentoBoleto(250, "12345678900")

pix.aplicarDesconto(10);

const pagamentos = [pix, cartao, boleto]

console.log("Pagamentos criados");

for(let i = 0; i < pagamentos.length; i++){
    pagamentos[i].processarPag();
}
console.log("Pagamento processados")