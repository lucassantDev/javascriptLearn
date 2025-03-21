// objetos são um conjunto de variaveis e funçõe, que são chamaddos de propriedades e métodos

// objetos são criados utilizando chaves
var carro ={}
console.log(typeof carro);


// criação de um objeto com suas propriedades
var pessoa = {
    nome: 'Lucas',
    idade: 19,
    profissao: 'Operador de caixa'
};


// criação de um método com função
var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    }
}; 
console.log(quadrado.area(6));

//Objetos servem para organizar seu código em pequenas partes reutilizáveis

//----- Exercícios

// 1 -> crie um objeto com seus dados pessoais
var meusDados = {
    nome: 'Lucas',
    Sobrenome: 'Ferreira',
    idade: 19,
    cidade: 'Recife',
    estado: 'Pernambuco'
};

console.log(meusDados);


// 2 -> crie um método no objeto anterior que mostre seu nome completo
var meusDados = {
    nome: 'Lucas',
    sobrenome: 'Ferreira',
    idade: 19,
    cidade: 'Recife',
    estado: 'Pernambuco',

    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    },
};
console.log(meusDados.nomeCompleto());


// 3 -> modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;
var precoAlterado = carro.preco;
console.log(precoAlterado);

// 4 -> crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem
var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,

    latir: function(pessoa){
        if(pessoa === 'homem'){
            return 'latir'
        }else{
            return 'Nada'
        }
    }
}

console.log(cachorro.latir('mulher'));