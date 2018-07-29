import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit {
  pages = [
    'current', 'goals', 'success'
    ];
  currPage: string = this.pages[0]; // set default page

  constructor() {}

  ngOnInit() {
  }

  switchPage(page: string) {
    this.currPage = page;
    console.log(`switching to page '${this.currPage}'...`);
  }

  getCurrPage() {
    return this.currPage;
  }
}
