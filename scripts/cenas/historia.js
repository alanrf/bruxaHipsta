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
    const volumeOriginal = musicaJogo.getVolume()
    musicaIntro.setVolume(volumeOriginal / 1.5);
    somNarracao.play()
    noLoop()
    setTimeout(function () { musicaIntro.setVolume(volumeOriginal) }, TAMANHO_NARRACAO_EM_SEGUNDOS * 1000);
  }

  _fundo() {
    image(imagemTelaInicial, 0, 0, width, height)
  }

  _texto() {
    texto.defineFonteHistoria()
    let yAtual = 40
    const x = width / 2
    const tamanhoLinha = 40

    this.textoHistoria.forEach(function (textoLinha) {
      texto.escritaDupla({
        texto: textoLinha,
        x: x,
        y: yAtual
      })
      yAtual += tamanhoLinha
    });
  }

  _botao() {
    botaoPularHistoria.y = height / 7 * 5
    botaoPularHistoria.draw()
  }
}