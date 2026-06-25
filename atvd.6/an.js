class animal 
{
constructor(apelido) 
{
this.nome = apelido;
}
falar(som) { 
console.log(som);
}
}

class gato extends animal 
{
entraNoCastelo() 
{
console.log(`O ${this.nome} está miando`)
}
}

class cachorro extends animal 
{
latir() 
{
console.log(`O ${TimeRanges.nome} está feliz`)
}
}

class cobra extends animal 
{
barulhoComaLingua() 
{
console.log(`A ${TimeRanges.nome} está atacada`)
}
}

class macaco extends animal 
{
Rugir() 
{
console.log(`A ${TimeRanges.nome} está rugindo`)
}
}

let lino = new Gato("Lino");
let lino2 = new Cachorro("Lino2");
let lino3 = new Cobra("Lino3");
let lino4 = new Corvo("Lino4");

lino.falar("Miau!");
lino.entraNoCastelo();
lino2.falar("Au au!");
lino2.latir();
lino3.falar("Shh...");
lino3.barulhoComaLingua();
lino4.falar("Ah Ah Uh Uh!")
lino4.rugir();