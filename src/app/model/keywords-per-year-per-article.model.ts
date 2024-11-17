import { KeywordsPerYear } from "./keywords-per-year.model";

export class KeywordsPerYearPerArticle {
    object: KeywordsPerYear;
    value: number;

    constructor (object: KeywordsPerYear, value: number) {
        this.object = object;
        this.value = value;
    }
}