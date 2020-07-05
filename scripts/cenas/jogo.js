class Jogo {
  constructor() {
    this.indice = 0
    this.mapa = fita.mapa
  }

  setup() {
    this._setupCenario()
    this._setupInimigos()
    this._setupColetaveis()
    this._setupPersonagem()
    this._setupMusicas()

    this.reset()
  }

  _setupMusicas() {
    musicas.push(musicaIntro)
    musicas.push(musicaVitoria)
    musicas.push(musicaGameOver)
    musicas.push(musicaJogo)
  }

  _setupCenario() {
    cenarioFundo = new Cenario(imagemFundo, 2)
    cenarioArvore = new Cenario(imagemArvore, 4)
    cenarioGrama = new Cenario(imagemGrama, 8)

    cenarios.push(cenarioFundo)
    cenarios.push(cenarioArvore)
    cenarios.push(cenarioGrama)
  }

  _setupPersonagem() {
    personagem = new Personagem({
      matriz: matrizPersonagem,
      imagem: imagemPersonagem,
      x: 0,
      variacaoY: ALTURA_BASE_Y,
      largura: 110,
      altura: ALTURA_PERSONAGEM,
      larguraSprite: 220,
      alturaSprite: 270
    });

  }

  _setupInimigos() {
    const inimigoNormal = new Inimigo({
      matriz: matrizInimigo,
      imagem: imagemInimigo,
      x: width,
      variacaoY: ALTURA_BASE_Y,
      largura: 52,
      altura: 52,
      larguraSprite: 104,
      alturaSprite: 104,
      velocidade: 10
    });

    const inimigoVoador = new Inimigo({
      matriz: matrizInimigoVoador,
      imagem: imagemInimigoVoador,
      x: width,
      variacaoY: 200,
      largura: 100,
      altura: 75,
      larguraSprite: 200,
      alturaSprite: 150,
      velocidade: 10
    });

    const inimigoGrande = new Inimigo({
      matriz: matrizInimigoGrande,
      imagem: imagemInimigoGrande,
      x: width,
      variacaoY: 0,
      largura: 200,
      altura: 200,
      larguraSprite: 400,
      alturaSprite: 400,
      velocidade: 10
    });

    inimigos.push(inimigoNormal)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)
  }

  _setupColetaveis() {
    const erva = new Erva({
      imagem: imagemErva,
      velocidade: 15,
      delay: 2,
      largura: 50,
      altura: 50
    })

    const vidaExtra = new VidaExtra({
      velocidade: 15,
      delay: 5,
      largura: 50,
      altura: 50
    })

    coletaveis.push(erva)
    coletaveis.push(vidaExtra)
  }

  reset() {
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)
    personagem.reset()
    this._resetLista(inimigos)
    this._resetLista(coletaveis)
    this.indice = 0
    this.pararMusicas()
    musicaJogo.loop()
  }

  _resetLista(_lista) {
    _lista.forEach(function (item) {
      item.reset();
    });
  }

  pararMusicas() {
    musicas.forEach(function (musica) {
      musica.stop()
    });
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      this._tentaPular()
    }
  }

  mousePressed() {
    this._tentaPular()
  }

  _tentaPular() {
    if (personagem.podePular()) {
      personagem.pula()
      somDoPulo.play()
    }
  }

  draw() {
    const linhaAtual = this.mapa[this.indice]
    const inimigoAtual = inimigos[linhaAtual.inimigo]
    const inimigoVisivel = inimigoAtual.x < -inimigoAtual.largura

    this._exibeLista(cenarios)
    this._exibePlacar()
    this._exibeLista(coletaveis)
    this._exibePersonagem()
  
    inimigoAtual.alteraVelocidade(linhaAtual.velocidade)
    inimigoAtual.exibe()

    if (inimigoVisivel) {
      inimigoAtual.aparece()
      this.indice++;
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigoAtual)) {
      this._colidiuComInimigo()

      if (!vida.aindaTemVidas()) {
        this._gameOver()
      }
    }

    coletaveis.forEach(function (item) {
      if (personagem.estaColidindo(item)) {
        jogo._coletarItem(item)
      }
    })

    personagem.aplicaGravidade()
    pontuacao.adicionarPonto()
    this._moveLista(coletaveis)
    this._moveLista(cenarios)
    inimigoAtual.move()
    vida.exibe()
  }

  _coletarItem(_item) {
    _item.coletou()
    if (_item.tipo === ENUM_TIPO_COLETAVEL.ERVA) {
      pontuacao.adicionarPlanta(PLACAR_PLANTA_COLETADA)
    }
    if (_item.tipo === ENUM_TIPO_COLETAVEL.VIDA) {
      vida.ganhaVida()
    }
  }

  _moveLista(_lista) {
    _lista.forEach(function (item) {
      item.move()
    });
  }

  _exibeLista(_lista) {
    _lista.forEach(function (item) {
      item.exibe()
    });
  }

  _exibePlacar() {
    pontuacao.exibe()
  }

  _exibePersonagem() {
    personagem.exibe();
  }

  _exibeBotaoJogarNovamente() {
    botaoJogarNovamente.y = height / 7 * 4
    botaoJogarNovamente.draw()
  }

  _colidiuComInimigo() {
    vida.perdeVida();
    somDano.play()
    personagem.tornarInvencivel();
  }

  _gameOver() {
    this._exibeBotaoJogarNovamente()
    cenarios[cenarios.length - 1].cinzou()
    this.pararMusicas()
    musicaGameOver.play()
    image(imagemGameOver, width / 2 - 200, height / 3)
    noLoop()
  }
}