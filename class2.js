// Exercício 1. Declarar uma variável (imutável) com seu nome
const name = "Thaís";
console.log(name);

// Exercício 2. Declarar uma variável (imutável) se o dia está chovendo ou não
const isRaining = Math.random() < 0.5;
console.log(isRaining);

// Exercício 3. Declarar uma variável com o ano que você nasceu/data marcante por algum motivo
let birthDate = new Date("December  06, 2000");
console.log(birthDate);

// Exercício 4. Declarar uma variável com idade ou número qualquer (imutável) e depois atribua seu valor com outro numero
const familyAge = { me: 21, boyfriend: 21, mother: 50, father: 48, sister: 23 };
familyAge.mother = 51;
console.log(familyAge);

// Exercício 5. Crie uma lista numérica de 1 a 10
let numberList = [...Array(11).keys()];
numberList.shift();
console.log(numberList);

// Exercício 6. Crie um objeto (dicionário) com dados de um aluno (dados aleatórios/fictícios)
let student = { name: "André", age: 12, grade: 10 };
console.log(student);

// Exercício 7. Crie um objeto de nome dados com as variaveis (chave-valor) dos pontos 1, 2, 3 e 4.
let data = {
	name: name,
	isRaining: isRaining,
	birthDate: birthDate,
	familyAge: familyAge,
};
console.log(data);

// Exercício 8. Declare uma variável x com valor 10 e multiplique por um número inteiro qualquer.
let x = 10;
x *= data.familyAge.boyfriend;
console.log(x);

// Exercício 9. Crie uma lista de objetos, com base no ponto 6
let objectList = [
	student,
	{ name: "Heitor", age: 19, grade: 9 },
	{ name: "Rafaela", age: 40, grade: 4 },
];
console.log(objectList);

// Exercício 10. Declare uma variável numérica e multiplique por outro número (qualquer número)
let y = objectList[2].age;
y *= Math.PI;
console.log(y.toFixed(2));
