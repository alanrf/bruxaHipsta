class TelaInicial {
  constructor() {
    this.x = width / 2;
    this.y = height
  }

  draw() {
    this._fundo()
    this._texto()
    this._botao()
  }
  
  _fundo() {
      image(imagemTelaInicial, 0, 0, width, height)
  }
  
  _texto() {
    texto.defineFonteTelaInicialPequena()
    texto.escritaDupla({
      texto: 'As aventuras de',
      x: width/2,
      y: height/3
    })
    
    texto.defineFonteTelaInicialGrande()
    texto.escritaDupla({
      texto: 'Hipsta',
      x: width / 2,
      y: height / 5 * 3
    })
  }
  
  _botao() {
    botaoIniciar.y = height / 7 * 5
    botaoIniciar.draw()
  }
}