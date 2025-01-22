// Referente ao teste1 --------------------------------
function somarNumeros(){
    var first = parseFloat(document.getElementById("first-number").value);
    var second = parseFloat(document.getElementById("second-number").value);
    
    var resultado = first + second;
    if(resultado > 10){
        alert("O número informado foi " + resultado + ", ele é maior que 10");
    }else{
        alert("O resultado da soma é: " + resultado);
    }
}