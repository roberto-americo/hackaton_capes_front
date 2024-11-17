import { ArticlePerYear } from "./article-per-year.model copy";
import { AuthorPerArticle } from "./author-per-article.model";
import { AuthorPerKeywordPerArticle } from "./author-per-keyword-per-title.model";
import { KeywordPerArticle } from "./keyword-per-article.model";
import { KeywordsPerYearPerArticle } from "./keywords-per-year-per-article.model";
import { SourcePerArticle } from "./source-per-article.model";

export class GlobalView {

	articlesPerYear: ArticlePerYear[];
	authorsPerArticle: AuthorPerArticle[];
	keywordsPerArticle: KeywordPerArticle[];
	sourcesPerArticle: SourcePerArticle[];
	keywordsPerYear: KeywordsPerYearPerArticle[];
	authorsPerKeyword: AuthorPerKeywordPerArticle[];

	constructor (articlesPerYear: ArticlePerYear[], authorsPerArticle: AuthorPerArticle[],
		keywordsPerArticle: KeywordPerArticle[], sourcesPerArticle: SourcePerArticle[],
		keywordsPerYear: KeywordsPerYearPerArticle[], authorsPerKeyword: AuthorPerKeywordPerArticle[]) {
			this.articlesPerYear = articlesPerYear;
			this.authorsPerArticle = authorsPerArticle;
			this.keywordsPerArticle = keywordsPerArticle;
			this.sourcesPerArticle = sourcesPerArticle;
			this.keywordsPerYear = keywordsPerYear;
			this.authorsPerKeyword = authorsPerKeyword;
		}
}