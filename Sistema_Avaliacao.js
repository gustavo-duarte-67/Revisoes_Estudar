let quantidadeDeAprovados = 0;
let quantidadeDeRecuperacao = 0;
let quantidadeDeReprovados = 0;

let nome;
let nota1;
let nota2;
let média;
let situação;

const quantidade = Int(prompt("Digite a quantidade de alunos: "));

for (let i = 1; i <= quantidade; i++) {
  console.log(`--- Dados do Aluno ${i} ---`);

  nome = prompt(`Digite o nome do aluno ${i}:`);
  nota1 = parseFloat(prompt(`Digite a nota 1 de ${nome}:`));
  nota2 = parseFloat(prompt(`Digite a nota 2 de ${nome}:`));

    média = (nota1 + nota2) / 2;

      if (média >= 7) {
    situação = "Aprovado";
    quantidadeDeAprovados++;
  } else if (média >= 5) {
    situação = "Recuperação";
    quantidadeDeRecuperacao++;
  } else {
    situação = "Reprovado";
    quantidadeDeReprovados++;
  }

 console.log(`Aluno: ${nome} | Média: ${média.toFixed(1)} | Situação: ${situação}`);
}
console.log(`Quantidade de Aprovados: ${quantidadeDeAprovados}`);
console.log(`Quantidade de Recuperação: ${quantidadeDeRecuperacao}`);
console.log(`Quantidade de Reprovados: ${quantidadeDeReprovados}`);