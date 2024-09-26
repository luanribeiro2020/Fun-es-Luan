const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Nos tempos de hoje, qual corte se encaixa melhor em você",
        alternativas: [
            {
                texto: "Tradicional",
                afirmacao: " Pela praticidade, cortes mais simples são geralmente mais fáceis de se usar no dia dia",
            },
            {
                texto: " Sofisticado",
                afirmacao: " Tendencias de moda, algumas pessoas são influenciadas por tendencias atuais e querem experimentar estilos que estão em alta ",
            }
        ]
    },
    {
        enunciado: " quando você corta seu cabelo, costuma se espelhar em outras pessoas ?",
        alternativas: [
            {
                texto: " sim, busco referências  ",
                afirmacao: " você costuma se espelhar em outras pessoas, e assim busca inspirações para realizar os seus cortes ",
            },
            {
                texto: " Não, prefiro manter meu proprio estilo, sem referências ",
                afirmacao: " você é uma pessoa que prefere manter seu proprio estilo, sem buscar referências em outras pessoas, isso garente a sua autenticidade ",
            }
        ]
    },
    {
        enunciado: " Qual o tipo de cuidado você tem com o seu cabelo?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: "Afirmação",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
];


