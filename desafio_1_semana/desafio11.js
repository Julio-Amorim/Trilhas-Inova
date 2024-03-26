let dataNascimento = prompt('Digite a data de nascimento(YYYY-MM-DD): ');
let anoAtual = prompt("Ano atual: ");

let anoNascimento = dataNascimento.split('-');

anoNascimento = parseInt(anoNascimento[0]);

let idade = anoAtual - anoNascimento;

console.log(idade);