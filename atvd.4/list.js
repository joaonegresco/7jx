const frutas = 
[
    "Maçã", "Banana", "Laranja"

];

const fila = 
[

    "Ana", "Beto", "Caio", "Daiane"

];

fila.push("Ellen");

const primeiro = 
fila.shift();

console.log(primeiro);


const pilha = 
[
    
    "M8",
    "M2",
    "M5"

];
    pilha.push("O Alquimista");

    const livro = pilha.pop();

    console.log(livro);


const temLaranja = frutas.includes("Laranja");

const temManga = frutas.includes("Manga");

console.log(temLaranja);

console.log(temManga);


const matriculas = new Set ([1001, 1002, 1005, 1009, 1002]);

console.log([...matriculas]);


const cores = new Set (["Verde", "Azul"]);

cores.add("Vermelho");
cores.add("Branco");
cores.add("Preto");

console.log([...cores]);


const temVerde = cores.has("Verde");

const temAmarelo = cores.has("Amarelo");

console.log(temVerde);

console.log(temAmarelo);


const convidados = ["JOAO", "VITORIA", "DUDA"];

const convidados_unicos = new Set(convidados);

console.log([...convidados_unicos]);


const produtos = new Map();

produtos.set("Mouse", 50.00);

produtos.set("Teclado", 120.00);


valorMouse = produtos.get("Mouse");

console.log(valorMouse);

valorTeclado = produtos.get("Teclado");

console.log(valorTeclado);


//test
