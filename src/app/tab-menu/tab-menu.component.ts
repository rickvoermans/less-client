import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit {
  currPage: string;

  constructor() { }

  ngOnInit() {
  }

}
