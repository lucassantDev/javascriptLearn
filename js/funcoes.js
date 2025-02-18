function areaQuadrado(lado){
    return lado * lado;
}

console.log('A área do quadrado é '+ areaQuadrado(10));

// corFavorita -> nome da função
// cor -> parâmetro
function corFavorita(cor){
    // dentro da função, podemos colocar uma estrutura de repetição também
    if(cor === "Azul"){
        return 'Eu gosto de céu';
    } else if( cor === 'Verde'){
        return 'Eu gosto das plantas';
    } else{
        return 'Eu não tenho uma cor preferida';
    }
}

console.log(corFavorita(""));

//function com typeof para conferir a idade
function terceiraIdade(idade){
    if(typeof idade !== "number"){
        return "informe uma idade válida!"
    } else if( idade >= 60){
        return "Você já faz parte da 3º idade!";
    } else{
        return "Você não faz parte da 3º idade.";
    };
}

console.log(terceiraIdade(21)); 

//exercícios 

//crie uma função para verificar se um valor é truthy
function valorVerdadeiro(dado){
    return !!dado;
}

console.log(valorVerdadeiro());

// função que retorne o perímetro de quadrado
function perimetroQuadrado(valor){
    soma = valor + valor + valor + valor
    if( typeof valor !== "number"){
        return 'Informe um número válido';
    }else{
        return "O perímetro do quadrado é " + soma;
    }
}
console.log(perimetroQuadrado(10));

// função que retorne seu nome completo
function nomeCompleto(nome, sobrenome){
    primeiro = nome;
    segundo = sobrenome;
    return `seu nome é ${primeiro} ${segundo}`;
}

console.log(nomeCompleto("Lucas", "Ferreira"));

//função para verificar se um número é par
function numeroPar(num){
    if(num % 2 == 0){
        return `${num} é um número par`;
    }else{
        return `${num} não é um número par`;
    }
}
console.log(numeroPar(1));

// função para retornar o tipo do dado informado
function dadoInformado(info){
    return typeof info;
}

console.log(dadoInformado(20.90));
console.log(dadoInformado("Lucas"));