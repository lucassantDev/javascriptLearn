// Tudo que estiver dentro de aspas será considerado string(textos)
console.log("Olá mundo!");
console.log("1 + 1 = 2");
console.log("2025-01-20");


// Number no javascript podem ser tanto inteiros, quanto floats(quebrados).
console.log(1);
console.log(1.1); // importante frizar que não se usa vírgula para informar um número float, e sim ponto
console.log(0.2);


// Booleanos retorna uma resposta verdadeira(true) ou falsa(false).Serve para ser usado em funções e estruturas de repetição por exemplo.
console.log(true);
console.log(false);

// Null e undefined são utilizados para tratar algum processo de dados, por exemplo.
console.log(null) // ausencia de valor
console.log(undefined) //indefinido


// Arrays/vetores são variáveis que armazenam diversos valores dentro de um único conjunto. Os valores podem ser os primitivos(string, number, boolean...), objetos ou até mesmo array dentro de array.
var nomes = ["Lucas", "Ferreira", "Santana"]; // Um array é declarado abrindo e fechando chaves []
var numeros = [1, 2, 3, 4];
console.log(numeros);
console.log(nomes);

// Trabalhando com datas
console.log(Date())
console.log(new Date()) // as duas linhas de código informam os mesmos dados, a data e a hora corrente
