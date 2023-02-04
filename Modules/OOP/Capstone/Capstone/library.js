class Library {
    constructor(nameOfLibrary, books){
        this.nameOfLibrary=nameOfLibrary
        this.books=[]
    }
    addBook(book){
        this.books.push(book)
    }

    getBook(){
        return this.books
    }

    getBooksByCategory(category){
        let booksByCategory = [];
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].categories.includes(category)) {
                booksByCategory.push(this.books[i]);
            }
        }
        return booksByCategory
    }
}

class Book{
    constructor(nameOfBooks, author, categories){
        this.nameOfBooks=nameOfBooks
        this.author=author
        this.categories=categories
    }
}


const library1=new Library('inti Library')

const bookA = new Book('Book A', 'Mr. A', 'Sci-Fi')

const bookB = new Book('Book B', 'Mr. B', 'Horror')

const bookC = new Book('Book C', 'Mr. C', 'Shounen')

const bookD = new Book('Book D', 'Mr. D', 'Sci-Fi')

library1.addBook(bookA)
library1.addBook(bookB)
library1.addBook(bookC)
library1.addBook(bookD)

const allBooks = library1.getBook()

sciFiBook=library1.getBooksByCategory('Sci-Fi')

console.log(allBooks)
console.log(sciFiBook)

