class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this. tipo = tipo;
  }
  atacar() {
    if(this.tipo === 'guerreiro') {
      console.log(`${this.nome} o ${this.tipo} de ${this.idade} anos, atacou seu oponente usando espada!`)
    } else if(this.tipo === 'mago') {
      console.log(`${this.nome} o ${this.tipo} de ${this.idade} anos, atacou seu oponente usando magia!`)
    } else if(this.tipo === 'monge') {
      console.log(`${this.nome} o ${this.tipo} de ${this.idade} anos, atacou seu oponente usando artes marciais!`)
    } else if(this.tipo === 'ninja') {
      console.log(`${this.nome} o ${this.tipo} de ${this.idade} anos, atacou seu oponente usando shuriken!`)
    } else {
      console.log(`O herói ${this.nome} não adquiriu nenhuma classe.`)
    }
  }
}

let hero0 = new heroi('Aragorn', 45, 'guerreiro')
let hero1 = new heroi('Gandalf', 200, 'mago')
let hero2 = new heroi('Aang', 1000, 'monge')
let hero3 = new heroi('Naruto', 27, 'ninja')

hero0.atacar();
hero1.atacar();
hero2.atacar();
hero3.atacar();