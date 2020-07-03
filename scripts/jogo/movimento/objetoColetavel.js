class ObjetoColetavel extends MovimentoDelay {
  constructor({
    imagem,
    velocidade,
    delay,
    y,
    largura,
    altura,
    tipo
  }) {
    super({
      imagem: imagem,
      velocidade: velocidade,
      delay: delay,
      y: y,
      largura: largura,
      altura: altura
    })
    this.tipo = tipo
  }

  coletou() {
    this.voltarParaOrigem()
    this.tocarSom()
  }

  tocarSom() {
    somCoin.play()
  }
}