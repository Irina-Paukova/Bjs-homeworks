// Задание 1

function parseCount(arg) {
	const parsed = parseInt(arg, 10);

	if (isNaN(parsed)) {
		throw new Error('Невалидное значение');
	}

	return parsed;
};

function validateCount(arg) {
	try {
		return parseCount(arg);
	} catch(e) {
		return e;
	}
};

// Задание 2

class Triangle {
	constructor(side1, side2, side3) {
		this.a = side1;
		this.b = side2;
		this.c = side3;
	};
	getPerimeter() {
		return this.a + this.b + this.c;
	};
	getArea() {
		const p = this.getPerimeter() / 2;
		const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return Number(S.toFixed(3));
	};
};

function getTriangle(side1, side2, side3) {
	try {
		if (this.a + this.b > this.c) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		return new Triangle(side1, side2, side3);
	} catch(e) {
		return {
		 	getArea() {
		 		return "Ошибка! Треугольник не существует"
		 	},
			getPerimeter() {
		 		return "Ошибка! Треугольник не существует"
			 }
		}
	}
};

const triangle = getTriangle(1,2,10);
console.log(triangle.getArea());