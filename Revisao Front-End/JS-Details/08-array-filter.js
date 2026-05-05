const numeros = [5, 10, 14, 14, 15, 15, 19, 20, 30, 50, 70];

const numeroEncontrado = numeros.filter((n) => {
    return n == 10;
});

const nomes = [
    "Walyson",
    "Davi",
    "Edu",
    "Laura",
    "Livia",
    "Amy",
    "Paulo",
    "Felipe",
    "Nathan",
    "Gabriel",
    "Gabriela",
    "Fontes",
];


// pessoasLegais = nomes.filter((nome) => {
//     return nome.length <= 3 || nome.length == 6;
// });

// console.log(pessoasLegais);


pessoasLetraN = nomes.filter((nome) => {
    const primeiraLetra = nome.substring(0,1);
    return primeiraLetra == "N" || primeiraLetra == "L";
});
console.log(pessoasLetraN);