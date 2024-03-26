let soma = 0;

for (let i = 1; i < 4; i++) {
    let nota = Number(prompt(`Digite a ${i} Nota: `));
    soma = soma + nota;  
}

let media = soma/3;

console.log(media.toFixed(2));

