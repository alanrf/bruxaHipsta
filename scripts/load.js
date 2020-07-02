function preload() {
  loadImagensCenario()
  loadImagensPersonagens()
  loadSonsJogo()
  ajustaSons()
  
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');

  fita = loadJSON('fita/fita.json');
}

function loadImagensCenario() {
  imagemGrama = loadImage('imagens/cenario/grama.png')
  imagemArvore = loadImage('imagens/cenario/arvore.png')
  imagemFundo = loadImage('imagens/cenario/fundo.png')
  imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png')
  imagemVida = loadImage('imagens/assets/coracao.png');
}

function loadImagensPersonagens() {
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
}

function loadSonsJogo() {
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somDano = loadSound('sons/uuhhh.mp3');
  somGameOver = loadSound('sons/tf_nemesis.mp3');
  somNarracao = loadSound('sons/teste.m4a');
}

function ajustaSons() {
  somGameOver.setVolume(0.4)
  somDoJogo.setVolume(0.8)
  somDano.setVolume(0.35)
  somNarracao.setVolume(6)
}