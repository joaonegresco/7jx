const musicas = [
  { id: 1, url: 'https://i.scdn.co/image/ab67616d0000b2736af0dbb312f05bd06f927f73', banda: 'MC Kevin', nome: 'Fênix' },
  { id: 2, url: 'https://i.ytimg.com/vi/Na5fFduQ62M/maxresdefault.jpg', banda: 'MC GW', nome: 'PLUG' },
  { id: 3, url: 'https://i.scdn.co/image/ab67616d0000b273010c8f1c844abf0e172962e9', banda: 'Ryu The Runner ft. Enzo', nome: '3S' },
  { id: 4, url: 'https://portalrapmais.com/wp-content/uploads/2023/04/contracapa-mc-cabelinho-little-love-deluxe.jpg', banda: 'MC Cabelinho', nome: 'VOCE&EU' },
  { id: 5, url: 'https://bhaz.com.br/wp-content/uploads/2023/10/386321113_3248232534688118311_n-fotor-20231008175212-1024x936.jpg', banda: 'DJONGA ft. Veigh', nome: 'Da Lua' }
];

const lista = document.getElementById('Musicas');
const nowTitle = document.getElementById('nowTitle');
const nowArtist = document.getElementById('nowArtist');
const nowCover = document.getElementById('nowCover');
const playerHint = document.getElementById('playerHint');
const playButton = document.getElementById('playButton');
let musicaSelecionada = null;

function linkSpotify(musica) {
  return 'https://open.spotify.com/search/' + encodeURIComponent(musica.nome + ' ' + musica.banda);
}

musicas.forEach((musica, index) => {
  const linha = document.createElement('div');
  linha.className = 'track-row';
  linha.innerHTML = `
    <span class="track-number"><span class="number">${index + 1}</span><span class="row-play">▶</span></span>
    <div class="track-title"><img src="${musica.url}" alt="" onerror="this.style.visibility='hidden'"><div><b>${musica.nome}</b><small>${musica.banda}</small></div></div>
    <span class="track-artist">${musica.banda}</span>
    <button class="listen-button">Ouvir ↗</button>`;
  linha.addEventListener('click', () => selecionarMusica(musica, linha));
  linha.querySelector('.listen-button').addEventListener('click', (event) => {
    event.stopPropagation();
    selecionarMusica(musica, linha);
    window.open(linkSpotify(musica), '_blank', 'noopener');
  });
  lista.appendChild(linha);
});

function selecionarMusica(musica, linha) {
  document.querySelectorAll('.track-row').forEach(row => row.classList.remove('selected'));
  linha.classList.add('selected');
  musicaSelecionada = musica;
  nowTitle.textContent = musica.nome;
  nowArtist.textContent = musica.banda;
  nowCover.innerHTML = `<img src="${musica.url}" alt="">`;
  playerHint.textContent = 'Clique em ▶ para procurar e ouvir no Spotify';
  playButton.textContent = '▶';
}

playButton.addEventListener('click', () => {
  if (!musicaSelecionada) {
    playerHint.textContent = 'Primeiro, escolha uma música na lista';
    return;
  }
  window.open(linkSpotify(musicaSelecionada), '_blank', 'noopener');
});
