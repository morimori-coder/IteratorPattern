import { Book } from './Book';
class BookShelf implements Iterable<Book> {
    private last: number = 0;
    private books: Book[] = [];

    constructor(maxsize: number) {
        this.books = new Array<Book>(maxsize);
    }

    public getBookAt(index: number): Book {
        return this.books[index];
    }

    public appendBook(book: Book): void {
        this.books[this.last] = book;
        this.last++;
    }

    public getLength(): number {
        return this.last;
    }

    [Symbol.iterator](): Iterator<Book> {
        let pointer = 0;
        let books = this.books;

        return {
            next(): IteratorResult<Book> {
                if (pointer < books.length) {
                    return {
                        done: false,
                        value: books[pointer++]
                    };
                } else {
                    return {
                        done: true,
                        value: null
                    };
                }
            }
        };
    }
}