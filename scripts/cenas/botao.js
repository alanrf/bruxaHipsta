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
    cenaAtual = "jogo"
    this.botao.hide()
  }
}

class BotaoIniciar extends BotaoGerenciador {
  
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