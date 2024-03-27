let frase = 'LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY'
let quantidade = 0;

for (let i = 0; i < frase.length; i++) {
    if(frase[i] == frase[i].toUpperCase() && frase[i] != frase[i].toLowerCase()) {
        quantidade++;
    } 
}

console.log(quantidade);
