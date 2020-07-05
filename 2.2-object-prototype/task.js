//Задача 1

String.prototype.isPalindrome = function(str) {
    const strReverse = this.split('').reverse().join('');
    this.trim();
    strReverse.trim();

    if (strReverse.toLowerCase().replace( /[\s]/g, '') == this.toLowerCase().replace( /[\s]/g, '')) {
      return true;
    } else {
      return false;
    }
};

  console.log("А роза упала на лапу Азора".isPalindrome());

//Задача 2

function getAverageMark(marks) {
 let averageMark = 0;

if(marks.length === 0) {
    return averageMark;
}

for (let i = 0; i < marks.length; i++) {
	averageMark += marks[i];
}

averageMark /= marks.length;

let roundedAverage = Math.round(averageMark);

return roundedAverage;
}