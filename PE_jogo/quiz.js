  const perguntas = [{
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
      {
      texto: "",
          imagens: [
            { src: "imagens/pringles1.jpg", correta: false },
            { src: "imagens/pringles2.jpg", correta: true },
          ],
        },
        {
      texto: "",
          imagens: [
            { src: "imagens/pepsi1.jpg", correta: false },
            { src: "imagens/pepsi2.jpg", correta: true },
          ],
        },
        {
      texto: "",
          imagens: [
            { src: "imagens/nasa1.jpg", correta: false },
            { src: "imagens/nasa2.jpg", correta: true },
          ],
        },
        {
      texto: "",
          imagens: [
            { src: "imagens/ttk1.jpg", correta: false },
            { src: "imagens/ttk2.jpg", correta: true },
          ],
        },
        {
      texto: "",
          imagens: [
            { src: "imagens/nuttela1.jpg", correta: false },
            { src: "imagens/nuttela2.jpg", correta: true },
          ],
        },
        {
      texto: "",
          imagens: [
            { src: "imagens/sam1.jpg", correta: false },
            { src: "imagens/sam2.jpg", correta: true },
          ],
        },
          {
      texto: "",
          imagens: [
            { src: "imagens/red1.jpg", correta: false },
            { src: "imagens/red2.jpg", correta: true },
          ],
        },
      {
        texto: "",
          imagens: [
            { src: "imagens/w1.jpg", correta: false },
            { src: "imagens/w2.jpg", correta: true },
          ],
        },
        {
          texto:"",
          imagens: [
            { src : "imagens/kfc2.jpeg", correta: true},
            { src: "imagens/kfc1.jpeg", correta: false},
          ]
        },
        {
          texto:"",
          imagens: [
            { src: "imagens/windows1.png", correta: true},
            { src: "imagens/windows2.png", correta: false}
          ]
        },
        {
          texto:"",
          imagens: [
            { src: "imagens/android1.png", correta: false},
            { src: "imagens/android2.png", correta: true}
          ]
        },
        {
          texto:"",
          imagens: [
            { src: "imagens/facebook1.png", correta: true},
            { src: "imagens/facebook2.png", correta: false}
          ]
        },
        {
          texto:"",
          imagens: [
            { src: "imagens/chrome1.png", correta: true},
            { src: "imagens/chrome2.png", correta: false}
          ]
        },
        {
          texto:"",
          imagens: [
            {src:"imagens/insta2.png", correta: false},
            {src:"imagens/insta1.png", correta: true}
          ]
        },
        {
          texto:"",
          imagens: [
            {src:"imagens/lego1.png", correta: false},
            {src:"imagens/lego2.png", correta: true}
          ]
        },
        {
          texto:"",
          imagens: [
            {src:"imagens/monster2.png", correta: false},
            {src:"imagens/monster1.png", correta: true}
          ]
        },
        {
          texto:"",
          imagens: [
            {src:"imagens/ps2.png", correta: true},
            {src:"imagens/ps1.png", correta: false}
          ]
        },
        {
          texto:"",
          imagens: [
            {src:"imagens/visa1.png", correta: false},
            {src:"imagens/visa2.png", correta: true}
          ]
        },
        {
          texto:"",
          imagens: [
            {src:"imagens/zap1.png", correta: false},
            {src:"imagens/zap2.png", correta: true}
          ]
        },
        {
          texto:"",
          imagens: [
            {src:"imagens/moltan1.png", correta: true},
            {src:"imagens/moltan2.png", correta: false}
          ]
        },
        {
          texto:"",
          imagens: [
            {src:"imagens/nintendo1.png", correta: false},
            {src:"imagens/nintendo2.png", correta: true}
          ]
        },
        {
          texto:"",
          imagens: [
            {src:"imagens/pinterest2.png", correta: true},
            {src:"imagens/pinterest1.png", correta: false}
          ]
        },
      ];

      let indicePerguntaAtual = 0;
      let pontuacao = 0;

      function carregarPergunta() {
        const pergunta = perguntas[indicePerguntaAtual]; document.getElementById("texto-pergunta").textContent = pergunta.texto;
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
          divResultado.textContent = "Correto! Você escolheu a imagem certa. +1 ponto.";
          divResultado.style.color = "green";
          pontuacao++; 
          atualizarPontuacao(); 
          const acertoSom = document.getElementById("acerto-som");
          acertoSom.play();
        } 
        else if(pontuacao == 0){
          divResultado.textContent = "Resposta errada. Boa sorte na próxima!";
          divResultado.style.color = "red";
          atualizarPontuacao();
          const erroSom = document.getElementById("erro-som");
          erroSom.play();
        }
        else {
          divResultado.textContent = "Resposta errada. Boa sorte na próxima! -1 ponto.";
          divResultado.style.color = "red";
          pontuacao = pontuacao - 1;
          atualizarPontuacao();
          const erroSom = document.getElementById("erro-som");
          erroSom.play();
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
            document.getElementById("texto-pergunta").style.display = "none";
            document.querySelector(".imagens").innerHTML = "";
            document.getElementById("resultado").textContent = `Você terminou o quiz com ${pontuacao} ponto(s)! \n (máximo possível: ${perguntas.length})`;
            document.getElementById("resultado").style.color = "blue";
            document.getElementById("botao-proximo").style.display = "none";
            document.getElementById("pontuacao").style.display = "none";
            document.getElementById("pabens").innerHTML ="Parabéns, você terminou o quiz!"
            
            const bomSom = document.getElementById("bom-som");
            
            const ruimSom = document.getElementById("ruim-som");

            if(pontuacao < 13){
              ruimSom.play();
              document.getElementById("mensagem").textContent = 'Parabéns por... Participar?';
              document.getElementById("mensagem").style.color = "red";
            }
            else {
              bomSom.play();
              document.getElementById("mensagem").textContent = 'Parabéns pela sua performance!';
              document.getElementById("mensagem").style.color = "green";
            }
        }
      }
      embaralhar(perguntas)
      carregarPergunta();
