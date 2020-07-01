class Jogo {
  constructor() {
    this.indice = 0
    this.mapa = fita.mapa
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    
    this.reset()

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigoNormal = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10)

    inimigos.push(inimigoNormal)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)
  }
  
  reset() {
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    inimigos.forEach(function(inimigo) {
      inimigo.voltarParaPosicaoOriginal();
    });
    this.indice = 0
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      if (personagem.podePular()) {
        personagem.pula()
        somDoPulo.play()
      }
    }
  }

  draw() {
    const linhaAtual = this.mapa[this.indice]
    const inimigoAtual = inimigos[linhaAtual.inimigo]
    const inimigoVisivel = inimigoAtual.x < -inimigoAtual.largura
    cenario.exibe();
    cenario.move();

    pontuacao.exibe()
    pontuacao.adicionarPonto()
    personagem.exibe();
    personagem.aplicaGravidade();
    
    inimigoAtual.alteraVelocidade(linhaAtual.velocidade)
    inimigoAtual.exibe()
    inimigoAtual.move()
    
    if(inimigoVisivel) {
      inimigoAtual.aparece()
      this.indice++;
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigoAtual)) {
      vida.perdeVida();
      somDano.play()
      personagem.tornarInvencivel();
      if (!vida.aindaTemVidas()) {
        this._botao()
        cenario.cinzou()
        somDoJogo.stop()
        somGameOver.play()
        image(imagemGameOver, width/2 - 200, height/3)
        noLoop()
      }
    }
    vida.exibe()
  }
  
  _botao() {
    botaoJogarNovamente.y = height / 7 * 4
    botaoJogarNovamente.draw()
  }
}