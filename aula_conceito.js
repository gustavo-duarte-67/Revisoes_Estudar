class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Esta pessoa é o ${this.nome}, que tem ${this.idade} anos.`;
    }
}

// Criando uma instância com `new`

const ana = new Pessoa("Ana", 28);
const pedro = new Pessoa("Pedro", 35);

console.log(ana.apresentar());
console.log(pedro.apresentar());