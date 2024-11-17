import { Keyword } from "./keyword.model";

export class KeywordsPerYear {
    year: string;
    keyword: Keyword;

    constructor (year: string, keyword: Keyword) {
        this.year = year;
        this.keyword = keyword;
    }
}