import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage /* implements OnInit */ {
  articles: any[]=[];
  request: any;

  constructor(private apiService: ApiService){}

  ionViewDidEnter(){

    this.apiService.getNews().subscribe((data: any): void=>{
      this.articles = data.articles;
    });
  }

  }


