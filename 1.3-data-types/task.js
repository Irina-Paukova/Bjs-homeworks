"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
  
    if(isNaN(+percent)) {
    	return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    } else if (isNaN(+contribution)) {
    	return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    } else if (isNaN(+amount)) {
    	return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    } 

    const sumAmount = amount - contribution;
    const today = new Date();
    const milliseconds = Number(date) - Number(today);
    const month = milliseconds / 1000 / 60 / 60 / 24 / 30.38;
    const P = percent / 100 / 12;
    const monthlyFee = sumAmount * (P + P / (Math.pow((1 + P), month) - 1));
    const totalAmount = monthlyFee * month;

  
    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);

}

function getGreeting(name) {
   
   if (name.length === 0) {
   	console.log(`Привет, мир! Меня зовут Аноним.`);
    return "Привет, мир! Меня зовут Аноним.";
   } 

   console.log(`Привет, мир! Меня зовут ${name}.`);
   return `Привет, мир! Меня зовут ${name}.`;

}