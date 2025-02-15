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