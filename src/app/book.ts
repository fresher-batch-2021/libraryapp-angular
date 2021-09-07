export class User {
    _id!: string;
    name!: string;
    email!: string;

}
export class Book {

    _id!: string;
    rev!: string;
    bookName!: string;
    authorName!: string;
    price!: number;
    quantity!: number;
    category!: string;
    image!: string;
    description!: string;
    user!: User;
    totalRequests!: [];

    setData(bookData: any) {
        this.bookName = bookData.bookName;
        this.authorName = bookData.authorName;
        this.price = bookData.price;
        this.quantity = bookData.quantity;
        this.category = bookData.category;
        this.image = bookData.image;
        this.description = bookData.description;
    }

}
