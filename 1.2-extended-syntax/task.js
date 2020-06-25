"use strict";

function getResult(a,b,c) {

	let D = b**2 - 4 * a * c;
	let result = [];
    let x1;
    let x2;

    if(D > 0) {
      x1 = (-b + Math.sqrt(D)) / (2 * a);
      x2 = (-b - Math.sqrt(D)) / (2 * a);
      result.push(x1);
      result.push(x2);
    } else if(D === 0) {
      x1 = (-b + Math.sqrt(D)) / (2 * a);
      result.push(x1);
    } else {
      result = "Корней нет!";
    }

    return result;
}

function getAverageMark(marks) {

	let averageMark = 0;

	for (let i = 0; i < marks.length; i++) {
		averageMark += marks[i];
	}

	if(marks.length > 5) {
		// for (let i = 0; i < 5; i++) {
		// averageMark += marks[i];
	    // }
	    //НЕ ПОНЯЛА ПОЧЕМУ ЭТОТ ЦИКЛ НЕ РАБОТАЕТ...
	  let grades = marks.slice(0,5);

      averageMark = marks[0] + marks[1] + marks[2] + marks[3] +marks[4]; // А ВОТ ЭТО ВОТ БЕЗОБРАЗИЕ РАБОТАЕТ
      averageMark = averageMark / grades.length;

      console.log("Максимальное количество оценок - 5");
    } else if(marks.length <= 0) {
      console.log("Оценки не введены");
      averageMark = 0;
    } else {
      averageMark = averageMark / marks.length;
    }

    return averageMark;
}

function askDrink(name,dateOfBirthday) {
    // код для задачи №3 писать здесь
    // return result;
}
