function enviar() {

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const endereco = document.getElementById("endereco").value;
  const descricao = document.getElementById("descricao").value;
  const tipo = document.getElementById("tipo").value;

  const valor = calcularValor(tipo);

  const mensagem =
`🚀 PEDIDO AUTOMÁTICO DE ORÇAMENTO

👤 Nome: ${nome}
📞 Telefone: ${telefone}
📍 Endereço: ${endereco}

🛠 Serviço solicitado:
${descricao}

📦 Tipo de serviço: ${tipo}

💰 Valor estimado: R$ ${valor}

📍 Localização:
https://www.google.com/maps?q=${latitude},${longitude}

⚡ Responda rápido para confirmar o agendamento.`;

  const numero = "5521991960469";

  const url =
    "https://wa.me/" +
    numero +
    "?text=" +
    encodeURIComponent(mensagem);

  window.open(url, "_blank");
}
