// EXERCICIO 01
/*const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')

comparIdade = minhaIdade > idadeAmiga
console.log("Sua idade é maior que a do seu melhor amigo?", comparIdade)

const diferençaIdade = minhaIdade - idadeAmiga
console.log("A diferença de idade é", diferençaIdade, "Anos")
*/



// EXERCICIO 02
/* 
1) Não sou maior de idade e quero passear de carro
2) Sou maior de idade e vou para a praia, e não quero passear de carro
3) Vou para a praia ou quero passear de carro
4) Posso tomar uma cervejinha e não vou passear de carro*/

const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

const pergunta1 = !b && d
const pergunta2 = b && a && !d
const pergunta3 = a || d
const pergunta4 = c && !d

console.log(`Não sou maior de idade e quero passear de carro: ${pergunta1} 

Sou maior de idade e vou para a praia, e não quero passear de carro: ${pergunta2}

Vou para a praia ou quero passear de carro: ${pergunta3}

Posso tomar uma cervejinha e não vou passear de carro: ${pergunta4}`)

// final exercicio