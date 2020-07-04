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
  imagemErva = loadImage('imagens/assets/erva.png');
}

function loadImagensPersonagens() {
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
}

function loadSonsJogo() {
  musicaJogo = loadSound('sons/musicas/trilha_jogo.mp3');
  musicaVitoria = loadSound('sons/musicas/vitoria.mp3');
  musicaGameOver = loadSound('sons/musicas/perdeu.mp3');
  musicaIntro = loadSound('sons/musicas/intro.mp3');
  somNarracao = loadSound('sons/narracao/intro.m4a');
  somDoPulo = loadSound('sons/efeitos/pulo.mp3');
  somDano = loadSound('sons/efeitos/dano.mp3');
  somCoin = loadSound('sons/efeitos/coin.mp3');
  somWow = loadSound('sons/efeitos/wow.mp3');
}

function ajustaSons() {
  musicaGameOver.setVolume(0.4)
  musicaJogo.setVolume(0.8)
  musicaIntro.setVolume(1.2)
  somDano.setVolume(0.35)
  somNarracao.setVolume(5)
  somWow.setVolume(0.35)
}