const enunciado = document.getElementById("enunciado");
const alternativas = [...document.getElementsByName("alternativas")];
const botãoResponder = document.getElementById("botão-responder");
const containerPergunta = document.getElementById("container-pergunta");
const botãoAnterior = document.getElementById("botão-anterior");
const botãoPróxima = document.getElementById("botão-próxima");
const inputPergunta = document.getElementById("input-pergunta");
let iterador = 0; //Global

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
    if(iterador >= perguntas.length - 1) {
        botãoPróxima.disabled = true;
    } else {
        botãoAnterior.disabled = false;
    }
});

botãoAnterior.addEventListener("click", () => {
    iterador = iterador - 1;
    gerarPergunta(iterador);
    if(iterador <= 0) {
        botãoAnterior.disabled = true;
    } else {
        botãoPróxima.disabled = false;
    }
});

botãoResponder.addEventListener("click", () => {
    responder(iterador);
});

inputPergunta.addEventListener("blur", () => {
    if((inputPergunta.valueAsNumber - 1) < 0 || (inputPergunta.valueAsNumber - 1) > perguntas.length - 1) {
        alert(`Insira um número entre 1 e ${perguntas.length}`)
    } else {
        iterador = inputPergunta.valueAsNumber - 1;
        gerarPergunta(iterador);
        if(iterador <= 0) {
            botãoAnterior.disabled = true;
            botãoPróxima.disabled = false;
        } else if(iterador >= perguntas.length - 1) {
            botãoPróxima.disabled = true;
            botãoAnterior.disabled = false;
        } else {
            botãoAnterior.disabled = false;
            botãoPróxima.disabled = false;
        }
    }
})

gerarPergunta(iterador);//Default