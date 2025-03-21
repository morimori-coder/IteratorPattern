class Book {
    private name:String;

    constructor(name:String) {
        this.name = name;
    }

    public getName():String {
        return this.name;
    }
} export { Book };