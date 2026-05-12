const mets = [1, 2, 3];
const centis = mets.map(m => m * 100);
centis.forEach(c => console.log(`${c}cm`));


const nts = [8, 9, 10, 11];
const nb = nts.filter(n => n < 9);
nb.forEach(n => console.log(n));


const al = ["messi vascaino", "juegador", "pelezito"];
const bu = al.find(nm => nm === "juegador");
console.log(bu);


const en = [true, true, false]
const te = en.every(e => e === true);
console.log(te);


const nm = ["beci", "leci"];
const ml = nm.map(n => n.toUpperCase());
nm.forEach(n => console.log(n.toUpperCase()));
nm.map(n => console.log (n))
forEach(n => console.log(n));

const arquivos = ["foto.jpg", "texto.txt", "ferias.jpg"];
const apenasFotos = arquivos.filter(arquivos.endsWith(".jpg"));
apenasFotos.forEach(arq => console.log(arq));
   

const produto = ["play5", "ip17px", "play4"];
produtos.filter(p => p.includes("Dell")).map(s => s.toUpperCase()).forEach(i => console.log(i));

let telefone = "(99) 9999-9876"
const escondido = telefone.replace("(99)", "(**)");
console.log(escondido);
