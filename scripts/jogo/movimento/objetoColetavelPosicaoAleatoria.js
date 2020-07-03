class ObjetoColetavelPosicaoAleatoria extends ObjetoColetavel {
  constructor({
    imagem,
    velocidade,
    delay,
    largura,
    altura,
    tipo
  }) {
    const MAX_Y = height - ALTURA_BASE_Y - altura
    const posicaoY = Math.floor(Math.random() * MAX_Y);

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
  }
  
  _posicaoAleatoriaY( ) {
    return Math.floor(Math.random() * this.maxY);
  }
  
  voltarParaOrigem() {
    super.voltarParaOrigem()
    this.y = this._posicaoAleatoriaY()
  }
}