class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    apresentar() {
        return `O livro ${this.titulo}, foi escrito por ${this.autor} e tem ${this.paginas} páginas.`;
    }
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 256);
const livro2 = new Livro("O Hobbit", "J.R.R. Tolkein", 310);

console.log(livro1.apresentar());
console.log(livro2.apresentar());