//import Car from "./class3.js";
let Car = require("./class3.js");

/* Exercício 1. Criar classe Automovel com os atributos:
    a) nome
    b) marca
    c) modelo
    d) paisOrigem
    e) tipoCombustivel
*/
class Automobile extends Car {
	constructor(name, brand, style, originCountry, fuelType) {
		super(name, brand, style, originCountry);
		this.fuelType = fuelType;
	}

	// f) Criar função para retornar seus atributos específicos
	getName = () => this.name;
	getBrand = () => this.brand;
	getStyle = () => this.style;
	getOriginCountry = () => this.originCountry;
	getFuelType = () => this.fuelType;
}

/* Exercício 3. Criar classe moto com os atributos:
    a) velocidadeMax
    b) numeroRodas
    c) ocupantes
*/
class Motorcycle {
	constructor(maxSpeed, wheelsNumber, occupants) {
		this.maxSpeed = maxSpeed;
		this.wheelsNumber = wheelsNumber;
		this.occupants = occupants;
	}

	// e) Criar função para retornar seus atributos específicos
	getMaxSpeed = () => this.maxSpeed;
	getWheelsNumber = () => this.wheelsNumber;
	getOccupants = () => this.occupants;
}

/* Exercício 2. Criar classe Carro com os atributos
    a) velocidadeMax
    b) numeroRodas
    c) temStep
    d) ocupantes
*/
class Vehicle extends Motorcycle {
	constructor(maxSpeed, wheelsNumber, occupants, hasStep) {
		super(maxSpeed, wheelsNumber, occupants);
		this.hasStep = hasStep;
	}

	// e) Criar função para retornar seus atributos específicos
	getHasStep = () => this.hasStep;
}

const automobile = new Automobile(
	"S10",
	"Chevrolet",
	"Cabine Dupla 2022",
	"Brasil",
	"Diesel"
);
console.log(
	`Automóvel: ${automobile.getName()}, marca: ${automobile.getBrand()}, modelo: ${automobile.getStyle()}, país de origem: ${automobile.getOriginCountry()}, tipo de combustível: ${automobile.getFuelType()}`
);

const motorcycle = new Motorcycle(300, 2, 2);
console.log(`Velocidade máxima da moto: ${motorcycle.getMaxSpeed()}`);

const vehicle = new Vehicle(320, 4, 5, true);
console.log(`Velocidade máxima do veículo: ${vehicle.getMaxSpeed()}`);
