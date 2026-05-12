const nmplayer = "Chocolatex"

let pts = 0;

pts = pts + 13; 

pts += 54; 

console.log (`${nmplayer} tem ${pts} pontos`);


const preco = 186000;

const desconto = 20000

console.log (`O carro custa R$ ${preco - desconto} com desconto. `)

const name = "jose"; 

const materia = "ds"

let nota1 = 6; 

let nota2 = 7;

const resultado = `

--- BOLETIM ESCOLAR --- 

Aluno: (name) 
Diciplina: $(materia) 
Status: ${(nota1+nota2)/2 > 6 ? "APROVADO" : "RECUPERAÇÃO"} 
`; 
console.log(resultado);