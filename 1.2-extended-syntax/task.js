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
    } 

    return result;
}

function getAverageMark(marks) {

let averageMark = 0;

if(marks.length === 0) {
    return averageMark;
} else if(marks.length > 5) {
    marks = marks.slice(0,5);
} 

for (let i = 0; i < marks.length; i++) {
	averageMark += marks[i];
}

return averageMark / marks.length;

}

function askDrink(name,dateOfBirthday) {
    // код для задачи №3 писать здесь
    // return result;
}
