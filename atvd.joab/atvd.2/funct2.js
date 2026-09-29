const calcularMedia = function (n1, n2, n3 ) {

  return (n1 + n2 + n3 ) / 3

}

function notaFinal(media)

 {

    console.log("A nota do aluno foi: " + media.toFixed(2))

    if (media>=7)

        console.log ("Aluno aprovado, gênio pra kralh")

    else
    

        console.log ("Aluno reprovado :( burro ")

}


let media = calcularMedia (5, 8, 9)

notaFinal (media)