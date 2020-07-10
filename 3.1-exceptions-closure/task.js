// Задание 1

function parseCount(arg) {
	const parsed = parseInt(arg, 10);

	if (isNaN(parsed)) {
		throw new Error('Невалидное значение');
	}

	return parsed;
};

function validateCount(arg2) {
	try {
		return parseCount(arg2);
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

		if (this.a + this.b !== this.c) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	};
	getPerimeter() {
		return this.a + this.b + this.c;
	};
	getArea() {
		const p = (this.a + this.b + this.c) / 2;
		const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return S.toFixed(3);
	};
};

function getTriangle(side1, side2, side3) {
	try {
		const t = new Triangle(side1, side2, side3);
		return t;
	} catch(e) {
		return {
		 getArea: "Ошибка! Треугольник не существует",
   		 getPerimetr: "Ошибка! Треугольник не существует",
 	 	}
	};
};

