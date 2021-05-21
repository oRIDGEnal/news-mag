import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsroomapiService {

  constructor(private _http:HttpClient) {  }

  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=za&apiKey=d2cd5f66536e4423ba7ea766ca8f2526";

  //technewsapiurl
  technewsApiUrl = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d2cd5f66536e4423ba7ea766ca8f2526";

  //biznewsapiurl
  biznewsApiUrl = "https://newsapi.org/v2/top-headlines?country=za&category=business&apiKey=d2cd5f66536e4423ba7ea766ca8f2526";

  //financial news
  finnewsApiUrl = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d2cd5f66536e4423ba7ea766ca8f2526";

  //techHeadings()
  techHeadings():Observable<any>{
    return this._http.get(this.technewsApiUrl);
  }
  
  //topHeading()
  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }

  //bizHeadlines()
  bizHeadings():Observable<any>{
    return this._http.get(this.biznewsApiUrl);
  }

  //finHeadlines()
  finHeadings():Observable<any>{
    return this._http.get(this.finnewsApiUrl);
  }

}
