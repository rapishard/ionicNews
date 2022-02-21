import { Component, OnInit } from '@angular/core';
import { SearchService, SearchType } from './../search.service';
import { FormControl } from '@angular/forms';
import {Article} from './../model/type';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  results: Article[];
  searchTerm = new FormControl('');
  type: SearchType = SearchType.all;


  constructor(private searchService: SearchService) { }

  ngOnInit() { }

  async searchChanged() {
    const response = await this.searchService.searchData(this.searchTerm.value);
    this.results=response.articles;

  }

  printValue() {
    console.log(this.searchTerm);
  }
}

