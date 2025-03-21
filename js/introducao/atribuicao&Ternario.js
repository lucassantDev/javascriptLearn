// operdores de atribuição

var x = 10;
var y = 25;

x+=y; // 35
x-=y; //15
x*=y; //250

console.log(x);

// Operadores ternários

var idade = 17;
var podeBeber = (idade >= 19) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber);

// a estrutura dos operadores ternarios seria:
// condição ? true : false

// exercicio

//1- some 500 ao valor do scroll abaixo, atribuindo um novo valor ao scroll
var scroll = 1000;
scroll+=500;
console.log(scroll); // irá retornar 1500

//2- atribua true para a variável dar crédito caso o cliente possua carro e casa e false caso contrário.
var clientePossuiCarro = true;
var clientePossuiCasa = false;
var darCredito = (clientePossuiCarro && clientePossuiCasa === true) ? 'Dar crédito' : 'Não dar crédito';
console.log(darCredito); // irá retornar false, pois o cliente possui carro mas não possui casa