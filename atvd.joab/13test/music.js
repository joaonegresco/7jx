const musicas = [
    {
        id: 1,
        url: 'https://i.scdn.co/image/ab67616d0000b2736af0dbb312f05bd06f927f73',
        banda: 'MC Kevin',
        nome: 'Velho Ditado',
        audio: 'audio/MC Kevin - Velho Ditado.mp3'
    },
    {
        id: 2,
        url: 'https://i.ytimg.com/vi/Na5fFduQ62M/maxresdefault.jpg',
        banda: 'MC GW',
        nome: 'PLUG',
        audio: ''
    },
    {
        id: 3,
        url: 'https://i.scdn.co/image/ab67616d0000b273010c8f1c844abf0e172962e9',
        banda: 'Ryu The Runner ft. Enzo',
        nome: '3S',
        audio: ''
    },
    {
        id: 4,
        url: 'https://portalrapmais.com/wp-content/uploads/2023/04/contracapa-mc-cabelinho-little-love-deluxe.jpg',
        banda: 'MC Cabelinho',
        nome: 'VOCE&EU',
        audio: ''
    },
    {
        id: 5,
        url: 'https://bhaz.com.br/wp-content/uploads/2023/10/386321113_324823253569321_9085721334688118311_n-fotor-20231008175212-1024x936.jpg',
        banda: 'DJONGA ft. Veigh',
        nome: 'Da Lua',
        audio: ''
    }
];

const listaMusicas = document.getElementById('listaMusicas');
const status = document.getElementById('status');
const player = new Audio();

musicas.forEach((musica) => {
    const item = document.createElement('li');

    item.className =
        'list-group-item musica d-flex align-items-center gap-3';

    item.innerHTML = `
        <img src="${musica.url}" alt="${musica.nome}">
        <div class="flex-grow-1">
            <div class="fw-bold">${musica.nome}</div>
            <div class="text-secondary">${musica.banda}</div>
        </div>
        <button class="btn-tocar" type="button">
            ▶ Tocar
        </button>
    `;

    const botao = item.querySelector('button');

    botao.addEventListener('click', async () => {
        if (!musica.audio) {
            status.textContent =
                'O arquivo de áudio desta música ainda não foi configurado.';
            return;
        }

        if (player.src === new URL(musica.audio, document.baseURI).href
            && !player.paused) {
            player.pause();
            botao.textContent = '▶ Continuar';
            return;
        }

        if (player.src !== new URL(musica.audio, document.baseURI).href) {
            player.src = musica.audio;
        }

        try {
            await player.play();
            status.textContent = `Tocando: ${musica.nome}`;
            document.querySelectorAll('.btn-tocar').forEach((b) => {
                b.textContent = '▶ Tocar';
            });
            botao.textContent = '⏸ Pausar';
        } catch (erro) {
            status.textContent =
                'Não foi possível reproduzir o áudio. Verifique o caminho do MP3.';
            console.error(erro);
        }
    });

    listaMusicas.appendChild(item);
});

player.addEventListener('ended', () => {
    status.textContent = 'Música finalizada.';
});
