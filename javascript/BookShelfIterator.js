class BookShelfIterator {
    constructor(bookShelf) {
        this.BookShelf = bookShelf;
        this.index = 0;
    }
    hasNext() {
        return this.index < this.BookShelf.getLength();
    }
    next() {
        let book = this.BookShelf.getBookAt(this.index);
        this.index++;
        return {
            done: this.index > this.BookShelf.getLength(),
            value: book
        };
    }
}
export { BookShelfIterator };
