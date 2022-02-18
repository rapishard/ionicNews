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
  infiniteScroll: any;
  util: any;

  constructor(private apiService: ApiService){}

  ionViewDidEnter(){

    this.apiService.getNews().subscribe((data: any): void=>{
      console.log(data);
      this.articles = data.articles;
    });
  }
  /* ionViewDidEnter(){

    this.apiService.getNews().subscribe((data: any): void=>{
      console.log(data);
      this.articles = data.articles;
      data.forEach(element => {
        this.articles.unshift(element)
      });
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.articles.length > 30) {
        this.util.presentToast('No more data available', true, 'bottom', 1500);
        event.target.disabled = true;
      }
    });
  } */
/*
  loadData(event) {
    this.apiService.getNews().subscribe((data: any): void=>{
    console.log(this.articles.length);
    this.articles.push();
    });
    event.target.complete();


  } */
/*
    doRefresh(event) {
      console.log('Begin async operation');

      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 1000);
    } */
/*
  async ngOnInit(){
    this.request.getNews(0,40).then(res=>{
      this.articles=res;
    });
    } */
  }


