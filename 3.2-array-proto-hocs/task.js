// Задание 1

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); 
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
	return arr1.length == arr2.length && arr1.every((a,i) => a === arr2[i]);
}

function memorize(fn, limit) {
    let memory = [];
     
    return function inner(...args) {
        let findResult = memory.find(elem => compareArrays(elem.args, args));
        let result = findResult ? findResult.result : fn(...args);

        if (!findResult) {
            memory.push({args: args, result: result});        
        }

        if (memory.length > limit) {
            memory.shift();
        }
        return result;
    }
}

const mSum = memorize(sum, 5);
console.log(mSum(5, 4));
console.log(mSum(5, 4));