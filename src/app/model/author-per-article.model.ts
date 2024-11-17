import { Author } from "./author.model";

export class AuthorPerArticle {
    object: Author;
    value: number;

    constructor (object: Author, value: number) {
        this.object = object;
        this.value = value;
    }
}