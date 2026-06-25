class AccountBank 
{
constructor(titular, saldo) 
{
this.titular = titular;
this.saldo = saldo;
}
versaldo() 
{
console.log(`Olá ${this.titular}, seu saldo atual é R$ ${this.saldo}`);
}
depositar(valor) 
{
this.saldo += valor;
}
sacar(valor) 
{
this.saldo -= valor;
}
}

let contaDoZe = new AccountBank("Zé", 21000);

contaDoZe.versaldo();
contaDoZe.depositar(350);
contaDoZe.sacar(100);
contaDoZe.versaldo();