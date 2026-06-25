// .map(): cria lista com os dados alterados 
const metros = [1, 5, 10];
const centimentos = metros.map( m => m * 100 );
console.log(centimentos);
centimentos.forEach( c => console.log(`${c} cm`));

// .filter(): cria lista com os dados filtrados
const notas = [8, 4, 9, 5];
const notas_baixas = notas.filter( n => n < 6 );
console.log(notas_baixas);

// .find () retorna  apenas o primeiro item que passa na condição
const alunos = [ "Joao", "Maria", "Pedro", "Ana" ];
const busca = alunos.find(nome => nome === "Pedro");
console.log(busca);

//every(): retorna  se todos passam na condição
const entrega = [ "entregue", "entregue", "entregue" ];
const todas_entregues = entrega.every( e => e === "entregue" );
console.log(todas_entregues);

// .toUpperCase(): converte string para maiúscula
// .toLowerCase(): converte string para minúscula
const nomes = ["Joao", "Ana" ];
const maiuscula = nomes.map( n => n.toUpperCase() );
nomes.forEach( n => console.log(n.toUpperCase()));

nomes.map(n => n.toLowerCase())
.forEach( n => console.log(n));

// .startsWith(): verifica se string começa com determinado valor
// .endsWith(): verifica se string termina com determinado valor
const arquivos = [ "relatorio.pdf", "texto.txt", "ferias.jpg" ];
const apenasFotos = arquivos
                            .filter( a => a.endsWith(".jpg") );
apenasFotos.forEach( arq => console.log(arq));

// .includes(): verifica se string contém determinado valor
const produtos = ["monitor dell", "teclado dell", "mouse logitech" ];
produtos.filter( p => p.includes("dell") )
.map( p => p.toUpperCase() )
.forEach( i => console.log(i) );

// .replace(): substitui parte da string por outra
let telefone = "(61) 99999-9999";
const escondido = telefone.replace("(61)", ("**"));
console.log(escondido);