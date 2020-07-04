function setup() {
  createCanvas(windowWidth, windowHeight);
  
  telaInicial = new TelaInicial()
  historia = new Historia()
  jogo = new Jogo()
  
  cenas = {
    telaInicial,
    historia,
    jogo
  }
  
  jogo.setup()
  jogo.pararMusicas()
  botaoSetup()
  
  cenaAtual = 'telaInicial'

  frameRate(40)

  musicaIntro.loop();
}

function botaoSetup() {
  botaoIniciar = new BotaoIniciar('Iniciar', width / 2, height / 2)
  botaoPularHistoria = new BotaoPularHistoria('Prosseguir', width / 2, height / 2)
  botaoJogarNovamente = new BotaoJogarNovamente('Jogar Novamente', width / 2, height / 2)
  botaoPularHistoria.hide()
  botaoJogarNovamente.hide()
}

function keyPressed() {
  jogo.keyPressed(key)
}

function touchStarted() {
  if ('jogo' == cenaAtual) {
    jogo.mousePressed()
  }
}

function draw() {
  cenas[cenaAtual].draw()
}