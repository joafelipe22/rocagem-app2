function enviar(){

const nome = document.getElementById("nome").value;
const telefone = document.getElementById("telefone").value;
const endereco = document.getElementById("endereco").value;
const descricao = document.getElementById("descricao").value;

const numero = "5521991960469";

const mensagem =
`Olá, quero orçamento:

Nome: ${nome}
Telefone: ${telefone}
Endereço: ${endereco}
Serviço: ${descricao}`;

window.open(
"https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem),
"_blank"
);

}
