function logArray(arr) {
	if(!Array.isArray(arr)) {
		throw newError('Аргумент не является массивом');// выкидываем исключение
	}
	console.log(`Массив размером ${arr.length}: [`);
	for(let item of arr) {
		console.log(`${item} (${typeof item})`);
	}
	console.log(`]`);
}

try {
	logArray([12, 5]);
} catch(e) { // отлавливаем исключение
	console.log(e);
}
// Error: Аргумент не является массивом