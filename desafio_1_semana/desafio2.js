let numeros = [15, 8, 90, 75, 102, 6, 2];

let maior = numeros[0];
let menor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);   
    
    if (numeros[i] >= maior) {
        maior = numeros[i];
    } else if (numeros[i] <= menor) {
        menor = numeros[i];
    }
}

console.log(`Maior número: ${maior}\nMenor número: ${menor}`);