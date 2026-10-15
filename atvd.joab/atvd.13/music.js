const musicas =
[
    {
        id: 1,
        url: 'https://i.scdn.co/image/ab67616d0000b2736af0dbb312f05bd06f927f73',
        banda: 'MC Kevin',
        nome: 'Fênix'
     },

     {
        id: 2,
        url: 'https://i.ytimg.com/vi/Na5fFduQ62M/maxresdefault.jpg',
        banda: 'MC GW',
        nome: 'PLUG'
     },

     {
        id: 3,
        url: 'https://i.scdn.co/image/ab67616d0000b273010c8f1c844abf0e172962e9',
        banda: 'Ryu The Runner ft. Enzo',
        nome: '3S'
     },

     {
        id: 4,
        url: 'https://portalrapmais.com/wp-content/uploads/2023/04/contracapa-mc-cabelinho-little-love-deluxe.jpg',
        banda: 'MC Cabelinho',
        nome: 'VOCE&EU'
     },

     {
        id: 5,
        url: 'https://bhaz.com.br/wp-content/uploads/2023/10/386321113_324823253569321_9085721334688118311_n-fotor-20231008175212-1024x936.jpg',
        banda: 'DJONGA ft. Veigh',
        nome: 'Da Lua'
     },
]

const listaMusicas = 
document.getElementById('listaMusicas');
musicas.forEach((musica) => 
    {

    const item = document.createElement('button');
    item.innerHTML = 
    `
    <img src="${musica.url}" alt="${musica.nome}" onerror="this.style.visibility='hidden'">
    <div class="fw-bold">${musica.nome}</div>
    <div class="text-muted">${musica.banda}</div>
    </div>
    `

    listaMusicas.appendChild(item);
}
)