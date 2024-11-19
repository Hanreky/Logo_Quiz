const perguntas = [
{
          texto: "",
          imagens: [
    { src: "imagens/coca1.jpg", correta: true },
    { src: "imagens/coca2.jpg", correta: false },
        ],
      },
      {
        texto: "",
        imagens: [
          { src: "imagens/netflix2.jpg", correta: false },
          { src: "imagens/netflix1.jpg", correta: true },
        ],
      },
      {
        texto: "",
        imagens: [
          { src: "imagens/spotify1.png", correta: false },
          { src: "imagens/spotify2.png", correta: true },
        ],
      },
    ];

    let indicePerguntaAtual = 0;
    let pontuacao = 0;

    function carregarPergunta() {
      const pergunta = perguntas[indicePerguntaAtual];
      document.getElementById("texto-pergunta").textContent = pergunta.texto;
      const containerImagens = document.querySelector(".imagens");
      containerImagens.innerHTML = pergunta.imagens
        .map(
          (imagem, indice) =>
            `<img src="${imagem.src}" alt="Opção ${indice + 1}" onclick="verificarResposta(${indice})">`
        )
        .join("");
      document.getElementById("resultado").textContent = "";
      document.getElementById("botao-proximo").style.display = "none";
              const numeroDaQuestao = indicePerguntaAtual + 1;
document.getElementById("texto-pergunta").textContent = 
  `${numeroDaQuestao}. ${pergunta.texto}`;

  document.getElementById("texto-pergunta").innerHTML = `${numeroDaQuestao}. ${pergunta.texto}`;

  document.getElementById("pabens").innerHTML = "Escolha a logo correta.";
    }
    

    function verificarResposta(indiceSelecionado) {
      const pergunta = perguntas[indicePerguntaAtual];
      const divResultado = document.getElementById("resultado");

      if (pergunta.imagens[indiceSelecionado].correta) {
        divResultado.textContent = "Correto! Você escolheu a imagem certa.";
        divResultado.style.color = "green";
        pontuacao++; 
        atualizarPontuacao(); 
      } else {
        divResultado.textContent = "Resposta errada. Boa sorte na próxima!";
        divResultado.style.color = "red";
      }
              document.querySelector(".imagens").innerHTML = "";
              document.getElementById("pabens").innerHTML = "";
              
      document.getElementById("botao-proximo").style.display = "block";
              
    }

    function embaralhar(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    

    function atualizarPontuacao() {
      document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;
    }

    function carregarProximaPergunta() {
      indicePerguntaAtual++;
      if (indicePerguntaAtual < perguntas.length) {
        carregarPergunta();
      } else {
        document.getElementById("texto-pergunta").textContent =
          "Quiz Concluído! Parabéns!";
                document.getElementById("texto-pergunta").style.display = "none"
        document.querySelector(".imagens").innerHTML = "";
        document.getElementById("resultado").textContent = `Você terminou o quiz com ${pontuacao} ponto(s)!`;
        document.getElementById("resultado").style.color = "blue";
        document.getElementById("botao-proximo").style.display = "none";
        document.getElementById("pontuacao").style.display = "none";
        document.getElementById("pabens").innerHTML ="Parabéns, você terminou o quiz!"
                
                
      }
    }
    embaralhar(perguntas)
    carregarPergunta();