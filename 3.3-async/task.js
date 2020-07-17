'use strict'

class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	};

	addClock(time, callback, id) {
		if (id === undefined) {
			throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
		}

		if (this.alarmCollection.some(elem => elem.id === id)) {
			return console.error('Будильник с таким id уже существует.');
		}

		this.alarmCollection.push({id, time, callback});
	};

	removeClock(id) {
		let len = this.alarmCollection.length;
		this.alarmCollection = this.alarmCollection.filter(elem => elem.id !== id);
		return len != this.alarmCollection.length;
	};

	getCurrentFormattedTime() {
		return new Date().toTimeString().substr(0, 5);
	};

	start() {
		let checkClock = alarm => (alarm.time == this.getCurrentFormattedTime()) && alarm.callback();
        (!this.timerId) && (this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm)), 5000));
	};

	stop() {
		if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
	};

	printAlarms() {
		console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(elem => console.log(`Будильник №${elem.id}, установлен на ${elem.time}`));
	};

	clearAlarms() {
		this.stop();
        this.alarmCollection = [];
	};
};

function testCase() {
    let alarmClock = new AlarmClock();

    alarmClock.addClock(alarmClock.getCurrentFormattedTime(), () => console.log('Скоро спать!'), 1);

    alarmClock.addClock(new Date(Date.now() + 60000).toTimeString().substr(0, 5), () => {
        console.log('Пора готовиться ко сну!');
        alarmClock.removeClock(2);
        alarmClock.printAlarms();
    }, 2);

    try {
        alarmClock.addClock(new Date(Date.now() + 60000).toTimeString().substr(0, 5), 
        () => console.log('Иди умываться!')); // Отсутствие ID
    } catch (e) {
        console.log(e);
    }
    
    alarmClock.addClock(new Date(Date.now() + 2 * 60000).toTimeString().substr(0, 5), () => {
        console.log('Иди спать, завтра рано на работу!');
        alarmClock.clearAlarms();
        alarmClock.printAlarms();
    }, 3);

    alarmClock.addClock(new Date(Date.now() + 60000).toTimeString().substr(0, 5), 
    () => console.log('Иди спать, завтра рано на работу!'), 1); // Существующий ID

    alarmClock.printAlarms();
    alarmClock.start();
}

testCase();
