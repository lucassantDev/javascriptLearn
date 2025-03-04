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