const tPT = ["Bem-vindo", "Carrinho", "Sair"];

const tEn = new Map
(
[
  ["Bem-vindo", "Welcome"],
  ["Carrinho", "Cart"],
  ["Sair", "Logout"]
]
);

const tES = new Map
(
[
  ["Bem-vindo", "Bienvenido"],
  ["Carrinho", "Carrito"],
  ["Sair", "Salir"]
]
);

const is = tEn;

const traducao = tPT.map
(
  termo =>
  is.get(termo)
);

console.log(traducao[0]);
console.log(traducao[1]);
console.log(traducao[2]);