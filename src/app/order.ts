export class Book {
    bookTitle!: string;
    _id!: string;
}
export class User {
    name!: string;
    _id!: string;
}

export class Order {
    _id!: string;
    rev!: string;
    dueDate!: string;
    orderDate!: string;
    fine!: number;
    returnDate!: any;
    status!: string;
    user!: User;
    book!: Book;
    setData(orderData: any) {
        this._id = orderData._id;
        this.rev = orderData.rev;
        this.dueDate = orderData.fine;
        this.returnDate = orderData.returnDate;
        this.status = orderData.status;

    }
}
