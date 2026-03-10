let saldo = 0
let investimento = 0

function obterValor(){

let valor = parseFloat(document.getElementById("valor").value)

if(isNaN(valor) || valor <= 0){
return null
}

return valor
}

function atualizarTela(){

document.getElementById("saldo").textContent = saldo.toFixed(2)
document.getElementById("investimento").textContent = investimento.toFixed(2)

}

function mensagem(texto){

document.getElementById("mensagem").textContent = texto

}

function sacar(){

let valor = obterValor()

if(valor == null){
mensagem("Digite um valor válido")
return
}

saldo = saldo - valor

atualizarTela()

mensagem("Saque realizado")

}

function depositar(){

let valor = obterValor()

if(valor == null){
mensagem("Digite um valor válido")
return
}

saldo = saldo + valor

atualizarTela()

mensagem("Depósito realizado")

}

function investir(){

let valor = obterValor()

if(valor == null){
mensagem("Digite um valor válido")
return
}

saldo = saldo - valor
investimento = valor * 0.2

atualizarTela()

mensagem("Investimento realizado")

}

function atualizarSaldo(){

atualizarTela()

mensagem("Saldo atualizado")

}

function sair(){

document.body.innerHTML = "<h1 style='text-align:center;margin-top:200px'>Sistema encerrado</h1>"

}