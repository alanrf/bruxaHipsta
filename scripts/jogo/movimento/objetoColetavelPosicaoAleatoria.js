class ObjetoColetavelPosicaoAleatoria extends ObjetoColetavel {
  constructor({
    imagem,
    velocidade,
    delay,
    largura,
    altura,
    tipo
  }) {
    const MIN_Y = height - Math.floor(ALTURA_BASE_Y + ALTURA_PULO_PERSONAGEM * 2 + GRAVIDADE * 1.75 + ALTURA_PERSONAGEM)
    const MAX_CALC = height - ALTURA_BASE_Y - MIN_Y - altura

    let posicaoY = Math.floor(Math.random() * MAX_CALC) + MIN_Y;

    super({
      imagem: imagem,
      velocidade: velocidade,
      delay: delay,
      y: posicaoY,
      largura: largura,
      altura: altura,
      tipo: tipo
    })
    
    this.maxCalc = MAX_CALC;
    this.minY = MIN_Y;
  }
  
  _posicaoAleatoriaY( ) {
    return Math.floor(Math.random() * this.maxCalc) + this.minY;
  }
  
  reset() {
    super.reset()
    this.y = this._posicaoAleatoriaY()
  }
}