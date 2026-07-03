// Função simulada apenas para não quebrar o código caso você use cálculo automático
function calcularValor(tipo) {
    if (tipo === "Terreno leve") return 100;
    if (tipo === "Médio") return 200;
    if (tipo === "Pesado") return 300;
    return 0;
}

function enviar() {
    // 1. Captura os dados digitados na tela usando os IDs corretos
    const nome = document.getElementById("nome").value || "Não informado";
    const telefone = document.getElementById("telefone").value || "Não informado";
    const endereco = document.getElementById("endereco").value || "Não informado";
    const descricao = document.getElementById("descricao").value || "Não informado";
    const tipo = document.getElementById("tipo").value;

    // 2. Calcula o valor estimado
    const valor = calcularValor(tipo);

    // 3. Monta a estrutura da mensagem organizada
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

    // 4. Transforma o texto para o formato aceito em links de internet
    const mensagemCodificada = encodeURIComponent(mensagem);

    // 5. Gera a URL apontando diretamente para o seu WhatsApp com o código do Brasil (55)
    const urlFinal = `https://wa.me/5521991960469?text=${mensagemCodificada}`;

    // 6. Abre o WhatsApp em uma nova aba
    window.open(urlFinal, '_blank');
}
