//Задача1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
    this.state *= 1.5; 
    }
    set state(newState) {
    	if(newState < 0) {
    		this.newState = 0;
    	} else if(newState > 100) {
    		this.newState = 100;
    	} else {
    		this.newState = newState;
    	}
    }
    get state() {
    	return this.newState;
    }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); 
console.log(sherlock.state);
sherlock.fix();
console.log(sherlock.state); 

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.type = 'Magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.type = 'book';
		this.author = author;
	}
}

class NovelBook  extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.type = 'novel';
		this.author = author;
	}
}

class FantasticBook  extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.type = 'fantastic';
		this.author = author;
	}
}

class DetectiveBook  extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.type = 'detective';
		this.author = author;
	}
}


const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

//Задача 2

class Library {
	constructor(name) {
		this.name = name;
		this.book = [];	
	}
	addBook(book){this.scores.push(rating)}
};