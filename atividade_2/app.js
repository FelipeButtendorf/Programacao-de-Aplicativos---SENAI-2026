import {EncomendaCartaz} from "./model/EncomendaCartaz.js";
import {EncomendaEtiqueta} from "./model/EncomendaEtiqueta.js";
import {EncomendaConvite} from "./model/EncomendaConvite.js";

const cartaz = new EncomendaCartaz(
    "Cartaz de divulgação do evento de POO",
    100,
    "A4"
);

const etiqueta = new EncomendaEtiqueta(
    "Etiqueta de identificação do produto",
    200,
    "Alexa"
);

const convite = new EncomendaConvite(
    "Convite para o evento de POO",
    50,
    "Reunião de POO"
);

cartaz.adicionarUnidades(50);
console.log(`Quantidade atualizada do cartaz: ${cartaz.getQuantidade}`);
cartaz.adicionarUnidades(0);
console.log(`Quantidade atualizada do cartaz: ${cartaz.getQuantidade}`);

const encomendas = [cartaz, etiqueta, convite];

for (let i = 0; i < encomendas.length; i++) {
    const encomenda = encomendas[i];
    encomenda.produzir();
}

