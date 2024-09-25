const enunciado = document.getElementById("enunciado");
const alternativas = [...document.getElementsByName("alternativas")];
const botãoResponder = document.getElementById("botão-responder");
const containerPergunta = document.getElementById("container-pergunta");
const botãoAnterior = document.getElementById("botão-anterior");
const botãoPróxima = document.getElementById("botão-próxima");
let iterador = 0;

const gerarPergunta = (iterador) => {
    alternativas.forEach(alternativa => alternativa.nextElementSibling.className = "")
    enunciado.innerHTML = perguntas[iterador].pergunta;
    const letrasAlternativas = ['a', 'b', 'c', 'd', 'e'];
    for(let i of letrasAlternativas) {
        document.querySelector(`label[for=${i}]`).innerHTML = perguntas[iterador].alternativas[i];
    }
}

const responder = (iterador) => {
    const { resposta } = perguntas[iterador];
    const alternativaCorreta = alternativas.find(alternativa => alternativa.value === resposta);
    alternativaCorreta.nextElementSibling.className = "correta"
}

botãoPróxima.addEventListener("click", () => {
    iterador = iterador + 1;
    gerarPergunta(iterador);
});

botãoAnterior.addEventListener("click", () => {
    iterador = iterador - 1;
    gerarPergunta(iterador);
});

botãoResponder.addEventListener("click", () => {
    responder(iterador);
});

gerarPergunta(iterador);//Default