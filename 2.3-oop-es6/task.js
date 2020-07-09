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
		super(author, name, releaseDate, pagesCount)
		this.type = 'novel';
	}
}

class FantasticBook  extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = 'fantastic';
	}
}

class DetectiveBook  extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = 'detective';
	}
}


const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); 
picknick.state = 10;
console.log(picknick.state); 
picknick.fix();
console.log(picknick.state); 

//Задача 2

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];	
	};
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		} 
	};
	findBookBy(types, value) {
		for (var i = 0; i < this.books.length; i++) {
			if (this.books[i][types] === value) {
				return this.books[i]; 
			} 
		}
		return null;
	};
	giveBookByName(bookName) {
		for (var i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				return this.books.splice(i, 1); // нужно возвращать удаленную книгу, но метод splice возвращает массив с оставшимися элементами
			} 
		}
		return null;
	}
};

const library = new Library("Библиотека имени Ленина");
const sherlokBook = new DetectiveBook("Артур", "о Шерлоке Холмсе", 2019, 1008);
const sherlokBook2 = new DetectiveBook("Артур", "о Шерлоке Холмсе 2", 2020, 1008)

library.addBook(sherlokBook);
library.addBook(sherlokBook2);
console.log(sherlokBook.author); 
sherlokBook.state = 10;
console.log(sherlokBook.state); 
sherlokBook.fix();
console.log(sherlokBook.state); 
console.log(library.findBookBy("releaseDate", 2020));
console.log(library.giveBookByName("о Шерлоке Холмсе 2"));
console.log(library.books); 