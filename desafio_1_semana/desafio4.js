let numeros = [23, 16, 11, 8, 19, 14, 5, 21];
let primosEncontrados = [];

for (let numero of numeros) {
    let primo = true;
    
    if (numero < 2) {
        primo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                primo = false;
                break;
            }
        }
    }
    
    if (primo) {
        primosEncontrados.push(numero);
    }
}

console.log("Números primos:", primosEncontrados);
