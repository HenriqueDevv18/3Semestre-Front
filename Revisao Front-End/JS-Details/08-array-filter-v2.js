const estoque = [
    {
        descricao : "Camisa Polo",
        cor: "Verde",
        preco: 49.99,
        perfil: "F",
        quantidade: 10,
        promocao : true
    },

    {
        descricao : "Camisa Polo",
        cor: "Amarela",
        preco: 49.99,
        perfil: "F",
        quantidade: 15,
        promocao : true
    },

    {
        descricao : "Camisa Polo",
        cor: "Azul",
        preco: 49.99,
        perfil: "M",
        quantidade: 100,
        promocao : false
    },

    {
        descricao : "Camisa Polo",
        cor: "Roxa",
        preco: 29.99,
        perfil: "F",
        quantidade: 5,
        promocao: false
    },
];

//  const camisasFemininas = estoque.filter((camiseta) => {
//     return camiseta.perfil == "F";
// });

// console.log(camisasFemininas)

let qtdPromocao = 0;
const produtosPromocao = estoque.filter((p) => {
    if(p.promocao == true) {
        qtdPromocao += p.quantidade;
    }
    return p.promocao == true;
});

console.log(`Quantidade de produtos em promoção: ${qtdPromocao}`);

console.log(produtosPromocao);

