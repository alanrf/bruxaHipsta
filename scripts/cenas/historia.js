class Historia {
  constructor() {
    this.x = width / 2;
    this.y = height

    this.textoHistoria = [
      'Uma estranha doença surgiu na aldeia das flores.',
      'A bruxinha Hipsta é a única curandeira da região e',
      'também é a única esperança do povo da aldeia.',
      '',
      'Ajude Hipsta a cruzar a floresta encantada para',
      'encontrar as ervas necessárias para sua mais',
      'nova poção, capaz de finalmente curar toda a aldeia.',
      '',
      'Cuidado com os perigos no caminho!'
    ]

  }

  draw() {
    this._fundo()
    this._texto()
    this._botao()
    const volumeOriginal = somDoJogo.getVolume()
    somDoJogo.setVolume(0.2);
    somNarracao.play()
    noLoop()
    // somDoJogo.setVolume(volumeOriginal);
  }

  _fundo() {
    image(imagemTelaInicial, 0, 0, width, height)
  }

  _texto() {
    this._defineFonte()
    let yAtual = 40
    const x = width / 2
    const tamanhoLinha = 40

    this.textoHistoria.forEach(function(texto) {
      fill(255)
      text(texto, x + 3, yAtual + 3);
      fill(0)
      text(texto, x, yAtual);
      yAtual += tamanhoLinha
    });

    textFont('Georgia')
  }

  _defineFonte() {
    strokeWeight(2)
    stroke(245, this.opacity)
    textAlign(CENTER)
    textSize(35)
    textFont('Times')
    textStyle(BOLDITALIC);
  }

  _botao() {
    botaoPularHistoria.y = height / 7 * 5
    botaoPularHistoria.draw()
  }
}