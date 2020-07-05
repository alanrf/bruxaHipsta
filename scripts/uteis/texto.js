class Texto {
    constructor() {
        this.margem = 3;
    }

    _defineFonteTelaInicial(tamanho) {
        this._defineFonteBase()
        textFont(fonteTelaInicial);
        textSize(tamanho);
    }

    defineFonteTelaInicialPequena() {
        this._defineFonteTelaInicial(50);
    }

    defineFonteTelaInicialGrande() {
        this._defineFonteTelaInicial(150);
    }

    defineFonteHistoria() {
        this._defineFonteBase()
        textSize(35)
        textFont('Times')
        textStyle(BOLDITALIC);
    }

    _defineFonteBase() {
        fill('black')
        strokeWeight(2)
        stroke(245, this.opacity)
        textAlign(CENTER)
    }

    escritaDupla({ texto, x, y }) {
        this.escreveTexto({
            cor: 'white',
            texto: texto,
            x: x,
            y: y
        })
        
        this.escreveTexto({
            cor: 'black',
            texto: texto,
            x: x + this.margem,
            y: y + this.margem
        })
    }

    escreveTexto({ cor, texto, x, y }) {
        fill(cor)
        text(texto, x, y);
    }
}