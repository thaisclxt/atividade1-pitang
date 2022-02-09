/* Exercício 1. Crie uma classe Automovel com as seguintes caracteristicas
a) Deve possuir os seguintes atributos:
    1. nome
    2. marca
    3. modelo
    4. paisOrigem
*/
class Car {
	// b) Os atributos devem ser inicializados através do construtor da classe
	constructor(name, brand, style, originCountry) {
		this.name = name;
		this.brand = brand;
		this.style = style;
		this.originCountry = originCountry;
	}

	// c) Ter uma função getAutomovel e retornar todos os atributos do Automovel
	getCar() {
		return {
			name: this.name,
			brand: this.brand,
			style: this.style,
			originCountry: this.originCountry,
		};
	}
}
module.exports = Car;

function main() {
	// Exercício 2. Crie uma lista com 2 ou mais automovei
	const car1 = new Car("Fiat Uno 2021", "Fiat", "1.0 attractive", "Itália");
	const car2 = new Car("Sedã", "BMW", "BMW Série 3 Sedã", "França");

	let cars = [car1, car2];

	// Exercício 3. Utilize FOR ou FOR OF e imprima a cada execução o nome e marca do automóvel
	for (let car of cars) {
		console.log(`Carro: ${car.name}, marca: ${car.brand}`);

		// Exercício 4. Dentro do FOR ou FOR OF ( Item 3 ) faça um FOR IN e imprima também todas as keys "chaves" do objeto de automóvel.
		for (let key in car) {
			console.log(`Chave: ${key}`);
		}
	}

	// Parte 2
	// Exercício 1. Crie um objeto de automovel (com os mesmos atributos de 1.1)
	let car3 = new Car("Citroën AMI", "Citroën", "AMI 8", "França");
	console.log(car3);

	// Exercício 2. Logo após sua criação, adicione um atributo de nome "cor" e atribua-lhe algum valor
	car3.color = "green";
	console.log(car3);

	// Exercício 4. Remova o atributo paisOrigem do objeto
	delete car3.originCountry;
	console.log(car3);
}
