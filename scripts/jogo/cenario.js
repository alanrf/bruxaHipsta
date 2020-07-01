class Cenario {
  constructor(imagem, velocidade){
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
  }
  
  exibe() {
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem,this.x2, 0, width, height);
  }
  
  
  cinzou() {
    let GRAY = color(110,110,110)
    GRAY.setAlpha(120)
    fill(GRAY)
    rect(0, 0, width, height); 
  }
  
  move() {
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;
    
    if (this.x1 < -width){
      this.x1 = width;
    }
    if (this.x2 < -width){
      this.x2 = width;
    }
  }
}