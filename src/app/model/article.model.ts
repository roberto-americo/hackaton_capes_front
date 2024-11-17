import { Author } from "./author.model";
import { Keyword } from "./keyword.model";
import { Source } from "./source.model";

export class Article {
    id: number;
	title: string;
	language: string;
	year: string;
	abstractArticle: string;
	source: Source;

    keywords: Keyword[];
	authors: Author[];

	constructor(id: number, title: string, language: string, year: string,
		abstractArticle: string, source: Source, keywords: Keyword[], authors: Author[]) {
		this.id = id;
		this.title = title;
		this.language = language;
		this.year = year;
		this.abstractArticle = abstractArticle;
		this.source = source;
		this.keywords = keywords;
		this.authors = authors;
	}
}