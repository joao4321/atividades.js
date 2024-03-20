function Carro(marca, modelo, ano, cor, kilometragem, valorFipe) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.kilometragem = kilometragem;
    this.valorFipe = valorFipe;

    this.anosUtilizacao = function() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.ano;
    }

    this.valorMercado = function() {
        if (this.kilometragem <= 30000) {
            return this.valorFipe * 1.1;
        } else if (this.kilometragem > 30000 && this.kilometragem <= 50000) {
            return this.valorFipe;
        } else {
            return this.valorFipe * 0.9;
        }
    }
}

function armazenarCarro() {
    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;
    let ano = parseInt(document.getElementById('ano').value);
    let cor = document.getElementById('cor').value;
    let kilometragem = parseInt(document.getElementById('kilometragem').value);
    let valorFipe = parseInt(document.getElementById('valorFipe').value);

    let carro = new Carro(marca, modelo, ano, cor, kilometragem, valorFipe);

    alert("Anos de Utilização: " + carro.anosUtilizacao() + "\nValor de Mercado: R$" + carro.valorMercado());
}
