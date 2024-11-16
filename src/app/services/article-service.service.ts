import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  public findBy(search: string): Observable<Article[]> {
    return this.http.get<Article[]>(`http://localhost:8080/article/search/?by=${encodeURIComponent(search)}`);
  }
}
