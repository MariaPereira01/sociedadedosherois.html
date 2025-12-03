function enviarZapZap() {
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá, meu nome é ${nome}. Gostaria de conversar sobre seu site. ${mensagem}`;
    const url = `https://wa.me/55999999999?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
}

