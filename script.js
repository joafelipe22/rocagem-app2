function enviar() {

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const descricao = document.getElementById("descricao").value;
    const tipo = document.getElementById("tipo").value;

    const valor = calcularValor(tipo);

    // Substitua pelo seu número real (55 + DDD + Seu Número, sem espaços ou traços)
    const meuNumero = "5521999999999"; 

    // Texto da mensagem que você já tinha criado
    const mensagem = `
🚀 SOLICITAÇÃO DE ORÇAMENTO AUTOMÁTICO

👤 Cliente: ${nome}
📞 Contato: ${telefone}
📍 Endereço: ${endereco}

🛠️ Serviço solicitado:
${descricao}

📂 Plano escolhido: ${tipo}

💰 Valor estimado: R$ ${valor}

⚡ PRÓXIMO PASSO:

Responda com uma opção:

1️⃣ Confirmar serviço
2️⃣ Quero ajustar o valor
3️⃣ Falar com atendente

✔️ Atendimento rápido e direto`;

   // 1. Transforma o texto para o formato que o link da internet aceita
    const mensagemCodificada = encodeURIComponent(mensagem);

    // 2. Junta o seu número com a mensagem no link padrão do WhatsApp
    const urlFinal = `https://wa.me/5521991960469?text=${mensagemCodificada}`;

    // 3. Abre o WhatsApp
    window.open(urlFinal, '_blank');
}
}
