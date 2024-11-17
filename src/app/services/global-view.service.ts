import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article.model';
import { GlobalView } from '../model/global-view.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalViewService {

  constructor(private http: HttpClient) { }

  public globalView(articles: Article[] | undefined): Observable<GlobalView> {
    return this.http.post<GlobalView>(`/api/global/view`, articles);
  }
}
