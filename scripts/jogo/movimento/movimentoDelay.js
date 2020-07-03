class MovimentoDelay {
  constructor({
    imagem,
    velocidade,
    delay,
    y,
    largura,
    altura
  }) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.origem = width + delay * 1000
    this.x = this.origem
    this.y = y
    this.largura = largura
    this.altura = altura
  }

  exibe() {
    if (this.x > width) {
      return
    }
    image(this.imagem, this.x, this.y, this.largura, this.altura)
  }

  move() {
    this.x = this.x - this.velocidade;

    if (this._saiuDaTela(this.x)) {
      this.voltarParaOrigem()
    }
  }

  _saiuDaTela(_x) {
    return _x <= 0
  }

  voltarParaOrigem() {
    this.x = this.origem
  }
}