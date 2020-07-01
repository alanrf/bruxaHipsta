function setup() {
  createCanvas(windowWidth, windowHeight);
  telaInicial = new TelaInicial()
  jogo = new Jogo()
  cenas = {
    telaInicial,
    jogo
  }
  jogo.setup()
  botaoIniciar = new BotaoIniciar('Iniciar', width / 2, height / 2)
  botaoJogarNovamente = new BotaoJogarNovamente('Jogar Novamente', width / 2, height / 2)

  frameRate(40)
  somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPressed(key)
}

function draw() {
  cenas[cenaAtual].draw()
}