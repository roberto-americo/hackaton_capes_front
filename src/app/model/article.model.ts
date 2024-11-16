import { Author } from "./author.model";
import { Keyword } from "./keyword.model";
import { Source } from "./source.model";

export class Article {
    id: number | undefined;
	title: string | undefined;
	language: string | undefined;
	year: string | undefined;
	abstractArticle: string | undefined;
	source: Source | undefined;

    keywords: Keyword[] | undefined;
	authors: Author[] | undefined;
}