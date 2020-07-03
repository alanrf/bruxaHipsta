class Erva extends ObjetoColetavelPosicaoAleatoria {
  constructor({
    imagem,
    velocidade,
    delay,
    largura,
    altura
  }) {
    super({
      imagem: imagem,
      velocidade: velocidade,
      delay: delay,
      largura: largura,
      altura: altura,
      tipo: ENUM_TIPO_COLETAVEL.ERVA
    })
  }

}