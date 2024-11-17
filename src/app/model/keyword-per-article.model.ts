import { Keyword } from "./keyword.model";

export class KeywordPerArticle {
    object: Keyword;
    value: number;

    constructor (object: Keyword, value: number) {
        this.object = object;
        this.value = value;
    }
}