class Inimigo extends Animacao {
  constructor({
    matriz,
    imagem,
    x,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite,
    velocidade
  }) {
    super({
      matriz: matriz,
      imagem: imagem,
      x: x,
      variacaoY: variacaoY,
      largura: largura,
      altura: altura,
      larguraSprite: larguraSprite,
      alturaSprite: alturaSprite
    });

    this.velocidade = velocidade
  }

  move() {
    this.x = this.x - this.velocidade
  }

  aparece() {
    this.x = width
  }

  alteraVelocidade(novaVelocidade) {
    this.velocidade = novaVelocidade
  }
}