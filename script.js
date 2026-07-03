function enviar() {

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const endereco = document.getElementById("endereco").value;
  const descricao = document.getElementById("descricao").value;
  const tipo = document.getElementById("tipo").value;

  const valor = calcularValor(tipo);

  const mensagem =
`🚀 SOLICITAÇÃO DE ORÇAMENTO AUTOMÁTICO

👤 Cliente: ${nome}
📞 Contato: ${telefone}
📍 Endereço: ${endereco}

🛠 Serviço solicitado:
${descricao}

📦 Plano escolhido: ${tipo}

💰 Valor estimado: R$ ${valor}

📍 Localização:
https://www.google.com/maps?q=${latitude},${longitude}

━━━━━━━━━━━━━━
⚡ PRÓXIMO PASSO:

Responda com uma opção:

1️⃣ Confirmar serviço
2️⃣ Quero ajustar o valor
3️⃣ Falar com atendente

━━━━━━━━━━━━━━
✔ Atendimento rápido e direto`;

  const numero = "5521991960469";

  const url =
    "https://wa.me/" +
    numero +
    "?text=" +
    encodeURIComponent(mensagem);

  window.open(url, "_blank");
}
