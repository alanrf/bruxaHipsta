class BotaoGerenciador {
  constructor(texto, x, y) {
    this.texto = texto
    this.x = x
    this.y = y
    
    this.botao = createButton(this.texto)
    this.proximoEstado = 'jogo'
  }
  
  draw() {
    this.botao.show()
    this.botao.position(this.x, this.y)    
    this.botao.addClass('botao-tela-inicial')
    this.botao.center('horizontal')
    this.botao.mousePressed(() => this.acao())
  }
  
  acao() {
    this.botao.hide()
  }
  
  show() {
    this.botao.show()
  }
  
  hide() {
    this.botao.hide()
  }
}

class BotaoIniciar extends BotaoGerenciador {
  acao() {
    cenaAtual = "historia"
    super.acao()
  }
}

class BotaoPularHistoria extends BotaoGerenciador {
  acao() {
    cenaAtual = "jogo"
    super.acao()
    if (somNarracao.isPlaying()) {
      somNarracao.stop()
    }
    loop()
  }
}

class BotaoJogarNovamente extends BotaoGerenciador {
  draw() {
    super.draw()
  }
  
  acao() {
    jogo.reset()
    super.acao()
    loop()
  }
}