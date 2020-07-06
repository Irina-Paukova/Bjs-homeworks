// Задание 1

function getSolutions(a,b,c) {

	const D = b**2 - 4 * a * c;
	let x1;
	let x2;

	if(D < 0) {
      return {
      	D, 
      	roots: []
      }
    } else if(D === 0) {
      x1 = (-b + Math.sqrt(D)) / (2 * a);
      
      return {
      	D, 
      	roots: [x1]
      }
    } else if(D > 0) {
      x1 = (-b + Math.sqrt(D)) / (2 * a);
      x2 = (-b - Math.sqrt(D)) / (2 * a);

      return {
      	D, 
      	roots: [x1,x2]
      }
    }

}

function showSolutionsMessage(a,b,c){

	const result = getSolutions(a,b,c);

	if (result.roots.length === 0) {
		return `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}. 
		Значение дискриминанта: ${result.D}.
		'Уравнение не имеет вещественных корней'`
	} else if (result.roots.length === 1) {
		return `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}. 
		Значение дискриминанта: ${result.D}.
		Уравнение имеет один корень ${result.roots[0]}`
	} else if (result.roots.length === 2) {
		return `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}. 
		Значение дискриминанта: ${result.D}.
		Уравнение имеет два корня. ${result.roots[0]}, ${result.roots[1]}`
	}

}

// Задание 2

function getAverageScore(data) {
  let average = [];

  for (let i in data) {
  	data[i] = getAverageMark(data[i]);
  	average.push(data[i])
  }
  data.average = getAverageMark(average);
  return data;
}

function getAverageMark(marks) {
let averageMark = 0;

if(marks.length === 0) {
    return averageMark;
}

for (let i = 0; i < marks.length; i++) {
	averageMark += marks[i];
}

return averageMark / marks.length;
}