"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
   
   let sumAmount = amount - contribution;
   let today = new Date();
   let milliseconds = Number(date) - Number(today);
   let month = milliseconds / 1000 / 60 / 60 / 24 / 30.38;
   let P = percent / 100 / 12;
   let monthlyFee = sumAmount * (P + P / (Math.pow((1 + P), month) - 1));
   let totalAmount = monthlyFee * month;

   if(isNaN(percent)) {
   	    let percentName = '"Процентная ставка"';

    	totalAmount = `Параметр ${percentName} содержит неправильное значение ${percent}`;
    	return totalAmount;
   } else if (isNaN(contribution)) {
        let contributionName = '"Начальный взнос"';

    	totalAmount = `Параметр ${contributionName} содержит неправильное значение ${contribution}`;
    	return totalAmount;
   } else if (isNaN(amount)) {
        let amountName = '"Общая стоимость"';

    	totalAmount = `Параметр ${amountName} содержит неправильное значение ${amount}`;
    	return totalAmount;
   } else {
   	    console.log(totalAmount.toFixed(2));
        return totalAmount.toFixed(2);
   }
   
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}