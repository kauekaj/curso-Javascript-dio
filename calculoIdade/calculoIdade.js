function calculoIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30
};

const pessoa2 = {
    nome: 'Carla',
    idade: 26
};

const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug'
};

console.log(calculoIdade.call(animal, 7));


console.log(calculoIdade.apply(pessoa2, [30]));