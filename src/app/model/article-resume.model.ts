import { ArticlePerYear } from "./article-per-year.model";
import { Institution } from "./institution.model";
import { ObjectValue } from "./object-value.model";

export class ArticlesResume {
    articlesNumber: number;
    authorsNumber: number;

    articlesLanguages: ObjectValue<String>[];
	articlesCountries: ObjectValue<String>[];

    constructor (articlesNumber: number, authorsNumber: number,
        articlesLanguages: ObjectValue<String>[],  articlesCountries: ObjectValue<String>[]) {
        this.articlesNumber = articlesNumber;
        this.authorsNumber = authorsNumber;
        this.articlesLanguages = articlesLanguages;
        this.articlesCountries = articlesCountries;
    }
}