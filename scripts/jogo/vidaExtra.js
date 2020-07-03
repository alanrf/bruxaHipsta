class VidaExtra extends ObjetoColetavelPosicaoAleatoria {
  constructor({
    velocidade,
    delay,
    largura,
    altura
  }) {
    super({
      imagem: imagemVida,
      velocidade: velocidade,
      delay: delay,
      largura: largura,
      altura: altura,
      tipo: ENUM_TIPO_COLETAVEL.VIDA
    })
  }

  tocarSom() {
    somWow.play()
  }
}