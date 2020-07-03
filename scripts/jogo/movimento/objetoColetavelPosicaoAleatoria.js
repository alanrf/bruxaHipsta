class ObjetoColetavelPosicaoAleatoria extends ObjetoColetavel {
  constructor({
    imagem,
    velocidade,
    delay,
    largura,
    altura,
    tipo
  }) {
    const MIN_Y = ALTURA_PULO_PERSONAGEM * 2 + altura + GRAVIDADE
    const MAX_Y = height - ALTURA_BASE_Y - altura - MIN_Y

    let posicaoY = Math.floor(Math.random() * MAX_Y) + MIN_Y;


    super({
      imagem: imagem,
      velocidade: velocidade,
      delay: delay,
      y: posicaoY,
      largura: largura,
      altura: altura,
      tipo: tipo
    })
    
    this.maxY = MAX_Y;
    this.minY = MIN_Y;
  }
  
  _posicaoAleatoriaY( ) {
    return Math.floor(Math.random() * this.maxY) + this.minY;
  }
  
  voltarParaOrigem() {
    super.voltarParaOrigem()
    this.y = this._posicaoAleatoriaY()
  }
}