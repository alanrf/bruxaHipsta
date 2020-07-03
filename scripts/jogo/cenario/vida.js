class Vida {
  constructor(total, inicial) {
    this.total = total
    this.inicial = inicial
    this.vidas = this.inicial
    this.largura = 25
    this.altura = 25
    this.xInicial = 20
    this.y = 20
  }
  
  exibe() {    
    for (let i = 0; i < this.vidas; i++) {
      const margem = 10 * i;
      const posicao = this.xInicial * (1 + i) + margem;
      image(imagemVida, posicao, this.y, this.largura, this.altura)
    }
  }
  
  ganhaVida() {
    if (this.vidas < this.total) {
      this.vidas++;
    }
  }
  
  perdeVida() {
    this.vidas--;
  }
  
  aindaTemVidas() {
    return this.vidas > 0;
  }
}