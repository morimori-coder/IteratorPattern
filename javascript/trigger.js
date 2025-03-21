import { Book } from "./Book.js";
import { BookShelf } from "./BookShelf.js";
// import {Iterator} from "./Iterator";
const bookshelf = new BookShelf(4);
bookshelf.appendBook(new Book("Around the World in 80 Days"));
bookshelf.appendBook(new Book("Bible"));
bookshelf.appendBook(new Book("Cinderella"));
bookshelf.appendBook(new Book("Daddy-Long-Legs"));
for (const book of bookshelf) {
    console.log(book.getName());
}
