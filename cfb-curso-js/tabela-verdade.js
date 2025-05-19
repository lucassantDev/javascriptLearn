/*

&& -> and | e
|| -> or | ou 
! -> not | não

*/ 

let n1, n2, n3, n4
n1 = 10
n2 = 5
n3 = 15
n4 = 2

console.log((n1>n2)&&(n1>n3));
// a mensagem irá retornar false, porque n1 é maior que n2, porém n1 não é maior que n3

console.log((n2>n4) && (n3>n1))
// a mensagem irá retornar true, porque n2 é maior que n4 e n3 é maior que n1

console.log((n2>n4) || (n3>n1))
// a mensagem irá retornar true, porque n2 é maior que n4 e n3 é maior que n1

console.log((n2>n4) || (n3<n1))
// a mensagem irá retornar true, porque n2 é maior que n4 e n3 não é maior que n1, porém
// como ou a primeira declaração ou a segunda estão corretas, a mensagem continua a retorna true

const valorVerdadeiro = 10
const valorFalso = false
if(valorVerdadeiro == 10 && !valorFalso){
    console.log('Está funcioando!');
}else{
    console.log('Não está funcionando')
}