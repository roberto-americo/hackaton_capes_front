import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ArticleCardComponent } from './article-card/article-card.component';
import { Article } from '../../model/article.model';
import { ArticleService } from '../../services/article-service.service';
import { GlobalViewService } from '../../services/global-view.service';
import { GlobalView } from '../../model/global-view.model';
import { GlobalViewComponent } from '../global-view/global-view.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ArticleCardComponent,
     ReactiveFormsModule, MatButtonModule, GlobalViewComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchFormControl = new FormControl('', []);

  articles: Article[] | undefined;
  globalViewData: GlobalView | undefined;

  loading: boolean = false;
  noContent: boolean = true;

  constructor(private articleService: ArticleService,
     private globalViewService: GlobalViewService) {}

  ngOnInit() {
    this.articles = [];
    this.noContent = false;
  }

  focusOnInput() {
    this.noContent = false;
  }

  doSearch() {
    this.loading = true;
    this.articles = [];
    this.globalViewData = undefined;
    
    this.articleService.findBy(this.searchFormControl.value || '').subscribe(
      {
        next: (response) => {
          this.articles = response;
          this.loading = false;

          if (response.length == 0) {
            this.noContent = true;
          }
        },
        error: (e) => {
          this.articles = []
          this.loading = false;
          this.noContent = true;
        },
        complete: () => {
          this.loading = false;
        }
      }
    );
  }

  isGlobalViewPossivel() {
    return this.articles && this.articles.length > 0;
  }

  doGlobalView() {
    this.loading = true;
    this.globalViewData = undefined;

    if (this.isGlobalViewPossivel()) {
      this.globalViewService.globalView(this.articles).subscribe({
          next: (response) => {
            this.globalViewData = response;
            this.loading = false;
            console.log(response);
          },
          error: (e) => {
            this.globalViewData = undefined;
            this.loading = false;
          },
          complete: () => {
            this.loading = false;
          }
      });
    }
  }
}
