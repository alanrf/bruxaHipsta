class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50
    this.pulos = 0
    this.piscarInvencibilidade = false;
  }
  
  pula() {
    if(this.podePular()) {
      this.velocidadeDoPulo = this.alturaDoPulo
      this.pulos++
    }
  }
  
  podePular() {
    return this.pulos < 2;
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
    
    if(this.y > this.yInicial){
      this.y = this.yInicial
      this.pulos = 0
    }
  }
  
  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    },1000);
  }
  
  exibe() {
    if (this.invencivel) {
      this.piscarInvencibilidade = !this.piscarInvencibilidade
      if (this.piscarInvencibilidade) {
        return;
      }
    }
    super.exibe()
  }
  
  estaColidindo(inimigo) {
    if (this.invencivel) {
      return false;
    }
    
    const precisao = .7
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
    
    return colisao;
  }

}