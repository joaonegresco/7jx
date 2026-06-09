class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
this.hp = hp;
this.mana = mana;
this.energia = energia;
}
}

class Habilidade {
constructor(id, nome, dano, custo, energia) {
this.id = id;
this.nome = nome;
this.dano = dano;
this.custo = custo;
this.energia = energia;
}
}

let hero = new Personagem("Player 1", "⬛ Venom", 100, 100, 0);
let boss = new Personagem("Player 2", "⬛ Wolverine", 100, 100, 0);

document.getElementById("nome-hero").textContent = hero.nome;
document.getElementById("titulo-hero").textContent = hero.titulo;

document.getElementById("nome-boss").textContent = boss.nome;
document.getElementById("titulo-boss").textContent = boss.titulo;

let containerBtn = document.getElementById("controles");

let listaHabilidades = [
new Habilidade(1, "Soco", 4, 0, 0),
new Habilidade(2, "Golpe", 8, 10, 0),
new Habilidade(3, "Combo", 14, 0, 100)
];

listaHabilidades.forEach(hab => {
let btn = document.createElement("button");
btn.innerText = hab.nome;
btn.classList.add("btn", "btn-dark", "m-2");

containerBtn.appendChild(btn);

btn.onclick = function () {
boss.hp -= hab.dano;

if (boss.hp < 0) {
boss.hp = 0;
}

atualizarTela();
verificarVitoria();
};
}
);

function atualizarTela() {
document.getElementById("hp-hero").value = hero.hp;
document.getElementById("hp-boss").value = boss.hp;
}

function verificarVitoria() {
if (boss.hp <= 0) {
mostrarVitoria();
}
}

function mostrarVitoria() {
document.getElementById("tela-vitoria").style.display = "flex";

let botoes = containerBtn.querySelectorAll("button");
botoes.forEach(botao => {
botao.disabled = true;
}
);
}

function reiniciarJogo() {
hero.hp = 100;
boss.hp = 100;

atualizarTela();

document.getElementById("tela-vitoria").style.display = "none";

let botoes = containerBtn.querySelectorAll("button");
botoes.forEach(botao => {
otao.disabled = false;
}
);
}

atualizarTela();