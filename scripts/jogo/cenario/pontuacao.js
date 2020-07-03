class Pontuacao {
  constructor() {
    this.pontos = 0
    this.plantas = 0
  }
  
  exibe() {
    textAlign(RIGHT)
    fill('#fff')
    textSize(50)
    text(parseInt(this.pontos), width - 30, 50)
  }
  
  adicionarPonto() {
    this.pontos += 0.2
  }
  
  adicionarPlanta(_placar) {
    this.planta += 1
    this.pontos += _placar
  }
}