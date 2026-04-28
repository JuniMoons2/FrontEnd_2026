function add() {
    const nome       = "Lucas Tolentino Coelho de Lima";
    const nascimento = "27/08/1997";
    const idade      = "28 anos";
    const altura     = "1,80 m";
    const posicao    = "Meio-campista";
    const rank       = "8.8";
    const imagem     = "img/Lucas_Paqueta.webp";

    const card = document.createElement("div");
    card.classList.add("player-card");

    card.innerHTML =
        '<div class="card-header-strip"></div>' +
        '<img src="' + imagem + '" alt="Lucas Paqueta">' +
        '<div class="card-body-custom">' +
            '<div class="player-name">' + nome + '</div>' +
            '<p class="player-info">📅 <span id="nascimento-paqueta">' + nascimento + '</span> (' + idade + ')</p>' +
            '<p class="player-info">📏 Altura: <span id="altura-paqueta">' + altura + '</span></p>' +
            '<p class="player-info">🏃 Posição: <span id="posicao-paqueta">' + posicao + '</span></p>' +
            '<div class="rank-badge">⭐ Rank: <span id="rank-paqueta">' + rank + '</span></div>' +
        '</div>';

    const container = document.getElementById("cards-container");
    container.appendChild(card);

    const botao = document.querySelector(".btn-adicionar");
    botao.disabled = true;
    botao.textContent = "✅ Jogador Adicionado";
    botao.style.backgroundColor = "#4caf50";
}
