import { Book } from './Book';
import { BookShelf } from './BookShelf';
class BookShelfIterator implements Iterator<Book> {
    private BookShelf: BookShelf;
    private index: number;

    constructor(bookShelf: BookShelf) {
        this.BookShelf = bookShelf;
        this.index = 0;
    }

    public hasNext(): boolean {
        return this.index < this.BookShelf.getLength();
    }

    public next(): IteratorResult<Book> {
        let book = this.BookShelf.getBookAt(this.index);
        this.index++;
        return {
            done: this.index > this.BookShelf.getLength(),
            value: book
        };
    }
}
