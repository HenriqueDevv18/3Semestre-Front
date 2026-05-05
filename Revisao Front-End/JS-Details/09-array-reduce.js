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


let totalEstoque = estoque.reduce((total, produto) => {
    totalPreco += produto.preco;
    return total + produto.quantidade;
}, 0);

console.clear();
console.log(`Você tem um total de ${totalEstoque} produtos no estoque`);
console.log(`O valor total do seu estoque é R${totalPreco.toFixed(2)}`);