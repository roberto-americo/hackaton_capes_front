import { AuthorPerKeyword } from "./author-per-keyword.model";
import { Author } from "./author.model";

export class AuthorPerKeywordPerArticle {
    object: AuthorPerKeyword;
    value: number;

    constructor (object: AuthorPerKeyword, value: number) {
        this.object = object;
        this.value = value;
    }
}