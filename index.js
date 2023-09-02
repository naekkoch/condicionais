/*

exercicio 1: a) Será um teste sobre o resto da divisão de numeros pares
b)os numeros pares onde o resultado é zero
c) onde os resultados são diferentes de 0

exercicio 2: a) informar o preço das frutas
b) O preço da Maçã é R$2.25
c) default, 5, pois o break faz o case roda

exercicio 3: a) esta perguntando ao usuario um numero e dizendo ao terminal que ele sera um numero( pois sempre volta string)
b)caso ele insirira 10, a mensagem será 'Esse número passou no teste'. caso seja -10, não apareceria nada
c) Dara erro. não é possível acessar a mensagem secreta pq ela está dentro de um escopo local

exercicio 1 escrita:



const pergunta = Number(prompt("Qual a sua idade?"))
if(pergunta >= 18){
    console.log("Você pode dirigir!!")
}
    else{
    console.log("Infelizmente vc não pode dirirgir")
}
 
exercicio 2 escrita



const turno = prompt("Digite o turno em que você estuda: Matutino(M), Vespertino(V) ou Noturno(N)").toUpperCase()

if(turno == "M"){
    console.log("Bom dia!")
} else if(turno == "V"){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}

exercicio 3 escrita

let turno = prompt("Digite o turno em que você estuda: Matutino(M), Vespertino(V) ou Noturno(N)")

switch (turno){
    case "M":
        console.log("Bom Dia!")
        breakl
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
}
exercicio 4 escrita 


const genero = prompt ("Qual genero de filme voce prefere?")
const preco = prompt ("Qual valor do ingresso?")

if(genero == "fantasia" && Number(preco) <= 15){
    console.log("Tenha um otimo filme!!")
 } else {
        console.log("EScolha outro :(")
    }
*/