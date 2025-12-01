function enviarWhatsApp() {
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá, meu nome é ${nome}. Mensagem: ${mensagem}`;
    const url = `https://wa.me/5599999999999?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
}

