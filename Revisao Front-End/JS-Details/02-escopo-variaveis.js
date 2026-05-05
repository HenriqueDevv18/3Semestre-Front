const nome = 'Henrique';

let sobrenome = "Felix";

{
    const nome = "Lucas"
    let sobrenome = "Costa";
    console.log(`Nome Completo: ${nome} ${sobrenome}`);
}
sobrenome = 600.97;
sobrenome = true;


console.log(`Nome Completo: ${nome} ${sobrenome}`);

const nomes = ["Eduardo", "Maria"];
for (let i = 0; i < nomes.length; i++) {
console.log(`Nome ${i}: $${nome[i]}`)
}

console.log(i);