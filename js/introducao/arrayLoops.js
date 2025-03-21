// --- array
var candidatos = ['Lucas', 'Ferreira', 'Santana'];

//mostrar os candidatos
console.log(candidatos[0]);
console.log(candidatos[1]);
console.log(candidatos[2]);
console.log(candidatos);

//alguns métodos e propriedades
console.log(candidatos.length); // length informa quantos dados tem armazenado naquele array

console.log(candidatos.push('Da Silva')); // push adiciona mais um dado ao final do array
console.log(candidatos);

// --- loops

//for
for(var gols = 0; gols <= 10; gols ++){
    console.log(`gols marcados: ${gols}`);
}

//while
console.log("------------------------------------ while")
var gols = 0;
while ( gols <= 10){
    console.log(`gols marcados: ${gols}`);
    gols = gols + 1;
}


// Exercício 
1 -> array com os anos em que o Brasil venceu a copa

Brasil = ["1959", "1962", "1970",  "1994", "2002"]
//função para mostrar cada ano utilizando o foreach. 
Brasil.foreach(anosCopa(item){
     console.log(Brasil[item]);
});

2 -> interagindo com o array

Brasil.foreach(anosCopa(item){
     console.log(`O Brasil ganhou a copa de ${Brasil[item]}`);
});


3 -> interagindo com o array de frutas e parando quando chegar na "Pera"

Frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"]

Frutas.foreach(fruta(item){
     console.log(item);
     if (item  === "Pera"){
            break;
     }
});
