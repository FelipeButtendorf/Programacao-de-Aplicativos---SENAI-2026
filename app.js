import { PagamentoCartao } from "./model/Pagamento.js";
import { PagamentoPix } from "./model/Pagamento.js";
import { PagamentoBoleto } from "./model/Pagamento.js";

const pix = new PagamentoPix(1000, "dxcsdfadasndfklald");

const cartao = new PagamentoCartao(500,4983,2);

const boleto = new PagamentoBoleto(250, "12283472345723409");

pix,aplicarDesconto(10);

const pagamentos = [pix,cartao,boleto];

console.log("Pagamentos criados")

for(let i = 0; i < pagamentos.length; i++){
    pagamentos[i].processarPag();
}

console.log("Pagamentos processados")