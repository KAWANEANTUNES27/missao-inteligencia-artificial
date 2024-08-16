const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " A medicina terapêutica se concentra no tratamento de doenças e condições médicas?
,
        alternativas: [
            {
                texto: "verdadeiro",
                afirmacao: "Sim,a medicina terapêutica se concentra no tratamento de doenças e condiçoes médicas."
            },
            {
                texto: "falso",
                afirmacao: "O foco é proporcionar terapias e intervençoes que visam aliviar sintomas."
            }
        ]
    },
    {
        enunciado: "A medicina terapêutica visa melhorar a qualidade de vida e a independência dos pacientes.?",
        alternativas: [
            {
                texto: "verdadeiro",
                afirmacao: "Sim, além de tratar doenças e condiçoes médicas."
            },
            {
                texto: "falso",
                afirmacao: "A medicina terapêutica busca sim melhorar a qualidade de vida e independência dos pacientes."
            }
        ]
    },
    {
        enunciado: "A medicina terapêutica é a mesma coisa que a medicina preventiva?",
        alternativas: [
            {
                texto: "verdadeiro",
                afirmacao: "São distintas embora ambas sejam importantes para a saúde."
            },
            {
                texto: "falso",
                afirmacao: "Não, pois a medicina terapêutica foca no tratamento de curar,controlar ou aliviar os sintomas de doenças. A medicina preventiva tem como objetivo de evitar surgimento de doenças incluindo medidas como vacinação etc."
            }
        ]
    },
    {
        enunciado: "A medicina terapêutica inclui administração de medicamentos e terapias específicas para tratar doenças?",
        alternativas: [
            {
                texto: "verdadeiro",
                afirmacao: "Sim, a medicina terapêutica inclui a administração de medicamentos e terapias específicas para tratar doenças."
            },
            {
                texto: "falso",
                afirmacao: "O objetivo é personalizar o tratamento de acoedo com a condição de saúde do paciente para alcançar o melhor resultado possível."
            }
        ]
    },
    {
        enunciado: "A medicina terapêutica é uma abordagem holística que considera todos os aspectos da saúde do paciente.? ",
        alternativas: [
            {
                texto: "verdadeiro",
                afirmacao: "A abordagem holística considera todos os aspectos da saúde do paciente, incluindo fatores físicos,emocionais,sociais e ambientais."
            },
            {
                texto: "falso",
                afirmacao: "No entanto,a abrangência e a integração de uma abordagem holística podem variar dependendo do contexto e da prática médica específica."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "A história da medicina terapêutica é extensa e evolutiva, refletindo o progresso na compreensão eno tratamento das doenças ao longo dos séculos.";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();
