let welcomeName = prompt("Qual o seu nome?");
document.getElementById("welcome").innerHTML = "Bem-vinda ao trivia, " + welcomeName + "!";
let wantToPlay = prompt("Quer jogar o Trivia sobre Amélie Poulain? \n 1. Quero! :) \n 2. Agora não. ;)");
let dontWannaPlay = 2;
const answerOne = "Resposta 1";
const answerTwo = "Resposta 2";
const answerThree = "Respostas 3";

if (wantToPlay == dontWannaPlay) {
    document.getElementById("bye").innerHTML = "Que tal na próxima?"
} else {
    let questionOne = prompt("Em que país se passa o filme? \n 1.França \n 2. Portugal \n 3. Áustria");
    let questionTwo = prompt("Qual era a profissão do pai da Amélie? \n 1. Professor \n 2. Garçom \n 3. Médico");
    let questionThree = prompt("A Amélie se apaixona por quem no filme? \n 1. Nino \n 2.Madeleine \n 3. Lucien");
    document.getElementById("right").innerHTML = "Respostas Certas";
    document.getElementById("wrong").innerHTML = "respostas Erradas";

    if (questionOne == "1") {
        document.getElementById("one").innerHTML = answerOne;
    } else {
        document.getElementById("four").innerHTML = answerOne;
    }

    if (questionTwo == "3") {
        document.getElementById("two").innerHTML = answerTwo;
    } else {
        document.getElementById("five").innerHTML = answerTwo;
    }

    if (questionThree == "1") {
        document.getElementById("three").innerHTML = answerThree;
    } else {
        document.getElementById("six").innerHTML = answerThree;
    }

}