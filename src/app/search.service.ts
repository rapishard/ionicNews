import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results } from './model/type';


export enum SearchType {
  all,
  title
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
 url = 'https://newsapi.org/v2/everything?q=';
 apiKey = 'a6df9314fb3d423da92af3a145525743';

 results: any;

   constructor(private http: HttpClient) { }

   async searchData(title: string): Promise<Results> {
    return await this.http.get<Results>(this.url+title+'&from=sortBy=publishedAt&apiKey='+this.apiKey).toPromise();
  }

  getDetails(id: any) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
