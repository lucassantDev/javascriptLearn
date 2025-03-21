// Uma variável dentro de uma função, não pode ser chamada fora dela
// function mostrarCarro(){
//     var carro = 'Mustang';
//     console.log(carro);
// }

mostrarCarro(); // o console mostrará 'Mustang'
console.log(carro); // aqui dará erro no código

// usar a variável nomeada por const é, muita das vezes, a melhor opção para o seu código,
// para buscar evitar possiveis conflitos que podem ser gerados apenas pela forma de como foram
// declaradas as variáveis

// exercicio

//1- Por qual motivo o código abaixo retorna erros
{
    var cor = 'preto';
    const marca = 'fiat';
    let portas = 4;
}

console.log(cor);

// const e let não vazam fora do bloco de código

//2- como corrigir o erro abaixo
function somarDois(x){
    const dois = 2;
    return x * dois;
}

function dividirDois(x){
    return x + dois;
}

somarDois(4);
dividirDois(6);