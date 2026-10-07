// Variáveis para contagem global
let quantidadeDeAprovados = 0;
let quantidadeDeRecuperacao = 0;
let quantidadeDeReprovados = 0;

// Variáveis para armazenar os dados de cada aluno
let nome;
let nota1;
let nota2;
let média;
let situação;

// Entrada de dados e conversão para número inteiro
const quantidade = parseInt(prompt("Digite a quantidade de alunos: "));

// Estrutura de repetição principal
for (let i = 1; i <= quantidade; i++) {
  console.log(`--- Dados do Aluno ${i} ---`);

  nome = prompt(`Digite o nome do aluno ${i}:`);

  // Desafio Extra: Repetição para validar Nota 1 entre 0 e 10
  do {
    nota1 = parseFloat(prompt(`Digite a nota 1 de ${nome} (0 a 10):`));
  } while (isNaN(nota1) || nota1 < 0 || nota1 > 10);

  // Desafio Extra: Repetição para validar Nota 2 entre 0 e 10
  do {
    nota2 = parseFloat(prompt(`Digite a nota 2 de ${nome} (0 a 10):`));
  } while (isNaN(nota2) || nota2 < 0 || nota2 > 10);

  // Cálculo da média
  média = (nota1 + nota2) / 2;

  // Estrutura condicional para verificar situação
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

  // Apresentação individual
  console.log(`Aluno: ${nome} | Média: ${média.toFixed(1)} | Situação: ${situação}`);
}

// Resumo final de estatísticas
console.log("\n=== RESUMO FINAL ===");
console.log(`Quantidade total de estudantes: ${quantidade}`);
console.log(`Quantidade de Aprovados: ${quantidadeDeAprovados}`);
console.log(`Quantidade em Recuperação: ${quantidadeDeRecuperacao}`);
console.log(`Quantidade de Reprovados: ${quantidadeDeReprovados}`);