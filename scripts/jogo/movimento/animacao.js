class Animacao {
  constructor({
    matriz,
    imagem,
    x,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite
  }) {
    this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;

    this._xInicial = this.x
    this._yInicial = this.y

    this.frameAtual = 0;
  }

  exibe() {
    if (this.x > width) {
      return
    }

    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);

    this._anima();
  }

  _anima() {
    this.frameAtual++

    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0
    }
  }

  reset() {
    this.x = this._xInicial
    this.y = this._yInicial
    this.frameAtual = 0
  }
}