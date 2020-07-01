class Jogo {
  constructor() {
    this.indice = 0
    this.mapa = fita.mapa
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10)

    inimigos.push(inimigo)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)
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
    const inimigo = inimigos[linhaAtual.inimigo]
    const inimigoVisivel = inimigo.x < -inimigo.largura
    cenario.exibe();
    cenario.move();

    pontuacao.exibe()
    pontuacao.adicionarPonto()
    personagem.exibe();
    personagem.aplicaGravidade();
    
    inimigo.alteraVelocidade(linhaAtual.velocidade)
    inimigo.exibe()
    inimigo.move()
    
    if(inimigoVisivel) {
      inimigo.aparece()
      this.indice++;
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornarInvencivel();
      if (!vida.aindaTemVidas()) {
        vida.exibe()
        image(imagemGameOver, width/2 - 200, height/3)
        noLoop()
      }
    }
    vida.exibe()
  }
}