  programa 
  {
  funcao inicio() 
  {
  inteiro acao = 0, opcao
  real saldo = 0, valor = 0, investimento = 0
  faca {
  
  
  escreva("🏦 Escolha: \n")
  escreva("\n💵 1. Saque \n")
  escreva("💵 2. depósito \n") 
  escreva("💵 3. investimento \n")
  escreva("💵 4. Atualizar saldo \n")
  escreva("💵 5. Sair \n")
 
  leia(opcao)

  escolha(opcao) 
  
  {

  caso 1:
  escreva("Digite o valor do saque:\n")
  leia(valor)
  saldo = saldo - valor
  escreva("Saldo atual: ", saldo, "\n")
  pare

  caso 2:
  escreva("Digite o valor do depósito:\n")
  leia(valor)
  saldo = saldo + valor
  escreva("Saldo atual: ", saldo, "\n")
  pare

  caso 3:
  escreva("Digite o valor do investimento:\n")
  leia(valor)
  saldo = saldo - valor + saldo
  investimento = valor * 0.2
  pare

  caso 4:
  escreva("🏧 Saldo Atualizado: " + saldo + " Investimento Atualizado: " + investimento + "\n")
  pare

  caso 5:
  escreva("\nSaindo...\n")
  pare

  } 

   }

  enquanto(opcao != 5)

    }

     } 
