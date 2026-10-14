let quantidadeDeAprovados = 0;
let quantidadeDeRecuperacao = 0;
let quantidadeDeReprovados = 0;

let nome;
let nota1;
let nota2;
let média;
let situação;

const quantidade = parseInt(prompt("Digite a quantidade de alunos: "));

for (let i = 1; i <= quantidade; i++) {
  console.log(`--- Dados do Aluno ${i} ---`);

  nome = prompt(`Digite o nome(s) do aluno(s) ${i}:`);

  do {
    nota1 = parseFloat(prompt(`Digite a nota 1 de ${nome} (0 a 10):`));
  } while (isNaN(nota1) || nota1 < 0 || nota1 > 10);

  do {
    nota2 = parseFloat(prompt(`Digite a nota 2 de ${nome} (0 a 10):`));
  } while (isNaN(nota2) || nota2 < 0 || nota2 > 10);

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

console.log("\n=== RESUMO FINAL ===");
console.log(`Quantidade total de estudantes: ${quantidade}`);
console.log(`Quantidade de Aprovados: ${quantidadeDeAprovados}`);
console.log(`Quantidade em Recuperação: ${quantidadeDeRecuperacao}`);
console.log(`Quantidade de Reprovados: ${quantidadeDeReprovados}`);