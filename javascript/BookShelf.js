class BookShelf {
    constructor(maxsize) {
        this.last = 0;
        this.books = [];
        this.books = new Array(maxsize);
    }
    getBookAt(index) {
        return this.books[index];
    }
    appendBook(book) {
        this.books[this.last] = book;
        this.last++;
    }
    getLength() {
        return this.last;
    }
    [Symbol.iterator]() {
        let pointer = 0;
        let books = this.books;
        return {
            next() {
                if (pointer < books.length) {
                    return {
                        done: false,
                        value: books[pointer++]
                    };
                }
                else {
                    return {
                        done: true,
                        value: null
                    };
                }
            }
        };
    }
}
export { BookShelf };
