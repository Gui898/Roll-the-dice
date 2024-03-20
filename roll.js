function roll(){
    const numDado = document.getElementById("DiceNumber").value;
    const qtdDado = document.getElementById("NumberTimes").value;
    const resultScreen = document.getElementById("result");
    const greaterNumber = document.getElementById("greaterNumber");

    let resultado = maisRoll(qtdDado, numDado);
    let maiorNumero = greater(resultado);

    return (resultScreen.innerText = resultado, greaterNumber.innerText = maiorNumero);
}

function maisRoll(qtd, num) {
    let rollResult = [];

    if(qtd <= 0 || num <= 0 || qtd === "" || num === ""){
        window.alert("Insert a number greater than 0")
        return "Try again"
    }
    if(qtd >= 1){
        for(let i = 0; i < qtd; i++){
           let numGerado =  gerarNumb(num);
           rollResult.push(numGerado);
        }
        return (rollResult);
    }
}

function gerarNumb(num){
    const gerarRandom = parseInt((Math.random()*num) +1);
    return gerarRandom;
}

function greater(array) {
    let maior = Math.max(...array);
    return maior
}
