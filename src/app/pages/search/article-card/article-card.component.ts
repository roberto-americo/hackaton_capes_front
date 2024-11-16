import { Component, Input } from '@angular/core';
import { Article } from '../../../model/article.model';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  @Input() article: Article | undefined;

  ngOnInit() {
  }

  getAuthorsNames(): string {
    let names = '';

    if (this.article?.authors) {
      this.article.authors.forEach(author => {
        if (names === '') {
          names = author.name || '';
        } else {
          names = names + ', ' + author.name;
        }

      })
    }

    return names;
  }

  getFirstAuthorInstitutionAndCountry(): string {
    let output = '';

    if (this.article?.authors) {
      output = this.article.authors[0].institution?.name || '';
      output = ' - ' + this.article.authors[0].institution?.country || '';
    }

    return output;
  }
}
