class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this. tipo = tipo;
  }
  atacar(tipo) {
    console.log(tipo)
  }
}

let heroi1 = new heroi('Gandalf', 200, 'mago');

console.log(heroi1.atacar)


//guerreiro, mago, monge e ninja