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

let herois = {
  hero: {
    0: ['Aragorn', 45, 'guerreiro'],
    1: ['Gandalf', 200, 'mago'],
    2: ['Aang', 1000, 'monge'],
    3: ['Naruto', 27, 'ninja'],
  }
}

generarHerois(herois)

function generarHerois(herois){
  for(let index in herois.hero){
    let [nome, idade, tipo] = herois.hero[index]
    let hero = new heroi(nome, idade, tipo)
    hero.atacar();
  }
}
