import { Component, Input } from '@angular/core';
import { GlobalView } from '../../model/global-view.model';
import { Color, LegendPosition, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { Author } from '../../model/author.model';
import { ArticlePerYear } from '../../model/article-per-year.model copy';
import { AuthorPerArticle } from '../../model/author-per-article.model';
import { Source } from '../../model/source.model';
import { Keyword } from '../../model/keyword.model';
import { KeywordPerArticle } from '../../model/keyword-per-article.model';
import { KeywordsPerYearPerArticle } from '../../model/keywords-per-year-per-article.model';
import { AuthorPerKeywordPerArticle } from '../../model/author-per-keyword-per-title.model';

@Component({
  selector: 'app-global-view',
  standalone: true,
  imports: [NgxChartsModule, CommonModule],
  templateUrl: './global-view.component.html',
  styleUrl: './global-view.component.scss'
})
export class GlobalViewComponent {
  @Input() data: GlobalView | undefined;
  
  articlesPerYearView: ChartData[] = [];
  authorsPerArticle: ChartData[] = [];
  keywordsPerArticle: {
    name: string;
    value: number;
  }[] = [];
  sourcesPerArticle: ChartData[] = [];
  keywordsPerYearPerArticle: ChartData[] = [];
  authorsPerKeywordsPerArticle: ChartData[] = [];

  view: [number, number] = [800, 500];

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  yearLabel: string = 'Ano';
  authorLabel: string = 'Autores';
  sourceLabel: string = 'Revistas';
  articleLabel: string = 'Publicações';
  timeline: boolean = true;
  isDoughnut: boolean = false;
  keywordsLabel: string = 'Palavras chaves';
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme = {
    name: 'vivid',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#005cbb', '#a75bbb', '#f4639e', '#ff8879'],
  };

  ngOnInit() {

    if (this.data) {
      this.getArticlesPerYearData(this.data.articlesPerYear);

      this.authorsPerArticle = this.getPerArticleData(this.data.authorsPerArticle);
      this.sourcesPerArticle = this.getPerArticleData(this.data.sourcesPerArticle);

      this.getArticlesPerKeywordData(this.data.keywordsPerArticle);

      const list = this.data?.keywordsPerYear;
      const keywords = this.data?.keywordsPerArticle;
      const years = this.data?.articlesPerYear;

      this.getKeywordPerYearData(list, keywords, years);

      this.getAuthorsPerKeywordData(this.data.authorsPerKeyword, keywords, this.data.authorsPerArticle);
    }
  }

  getAuthorsPerKeywordData(list: AuthorPerKeywordPerArticle[], keywords: KeywordPerArticle[], authors: AuthorPerArticle[]) {

    const result: ChartData[] = []

    keywords.forEach((item, index) => {
      if (index >= 10) {
        return;
      }

      const series: {
        name: string;
        value: number;
      }[] = []

      authors.forEach((author, index) => {
        if (index >= 10) {
          return;
        }

        const authorPerKeyword = list.find( object => object.object.keyword.id === item.object.id && object.object.author.id === author.object.id);
        let value = 0;

        if (authorPerKeyword) {
          value = authorPerKeyword.value
        }

        series.push({
          name: author.object.name,
          value: value
        })
      });
  
      result.push(
        {
          name: item.object.name,
          series
        }
      );
    });
    
    list.forEach((item, index) => {
      if (index >= 10) {
        return;
      }
    });

    this.authorsPerKeywordsPerArticle = result;
  }

  getKeywordPerYearData(list: KeywordsPerYearPerArticle[], keywords: KeywordPerArticle[], years: ArticlePerYear[]) {

    const result: ChartData[] = []

    keywords.forEach((item, index) => {
      if (index >= 10) {
        return;
      }

      const series: {
        name: string;
        value: number;
      }[] = []

      years.forEach( year => {
        const keywordsPerYear = list.find( object => object.object.keyword.id === item.object.id && object.object.year === year.object);
        let value = 0;

        if (keywordsPerYear) {
          value = keywordsPerYear.value
        }

        series.push({
          name: year.object,
          value: value
        })
      });
  
      result.push(
        {
          name: item.object.name,
          series
        }
      );
    });
    
    list.forEach((item, index) => {
      if (index >= 10) {
        return;
      }
    });

    this.keywordsPerYearPerArticle = result;
  }

  getPerArticleData<T>(list:{
    object: T,
    value: number
  }[]): ChartData[] {
    let chartData: ChartData[] = []

    list.forEach((item, index) => {
      if (index >= 10) {
        return;
      }

      let name;

      if (item.object instanceof Author) {
        name = (item.object as Author).name
      } else if (item.object instanceof Source) {
        name = (item.object as Source).name
      } else {
        name = (item.object as Keyword).name
      }

      chartData.push({
        name: name,
        series: [
          {
            name: 'Artigos',
            value: item.value
          }
        ]
      });
    })

    return chartData;
  }

  getArticlesPerKeywordData(list: KeywordPerArticle[]) {
    let series: {
      name: string;
      value: number;
    }[] = []
    
    list.forEach((item, index) => {
      if (index >= 10) {
        return;
      }

      series.push({
        name: item.object.name,
        value: item.value
      })
    });

    this.keywordsPerArticle = series;
  }

  getArticlesPerYearData(list: ArticlePerYear[]) {
    let series: {
      name: string;
      value: number;
    }[] = []
    
    list.forEach((item, index) => {
      if (index >= 10) {
        return;
      }

      series.push({
        name: item.object,
        value: item.value
      })
    });

    this.articlesPerYearView = [
      {
        name: "Artigos",
        series
      }
    ];
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}

class ChartData  {
  name: string
  series: {
    name: string;
    value: number;
  }[]

  constructor() {
    this.name = '';
    this.series = []
  }
}
