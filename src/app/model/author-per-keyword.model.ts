import { Author } from "./author.model";
import { Keyword } from "./keyword.model";

export class AuthorPerKeyword {
    author: Author;
    keyword: Keyword;

    constructor (author: Author, keyword: Keyword) {
        this.author = author;
        this.keyword = keyword;
    }
}