class Personagem 

{
constructor(nome, titulo, hp, mana, energia) 
{
this.nome = nome;
this.titulo = titulo;
this.hp = hp;
this.mana = mana;
this.energia = energia;
}
}

class Habilidade
{    
constructor(id, nome, dano, custo, energia)
{
this.id = id;
this.nome = nome;
this.dano = dano;
this.custo = custo;
this.energia = energia;
}    
}

let hero = new Personagem ("Vss7", "⬛ Venom", 100,100,0)
let boss = new Personagem ("Rainha", "⬛ wolverine", 100,100,0)

document 
.getElementById("nome-hero")
.textContent = hero.nome;

document
.getElementById("titulo-hero")
.textContent = hero.titulo;

document 
.getElementById("nome-boss")
.textContent = boss.nome;

document
.getElementById("titulo-boss")
.textContent = boss.titulo;