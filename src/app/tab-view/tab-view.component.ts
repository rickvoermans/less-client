import {Component, OnInit} from '@angular/core';
import {PageCurrentComponent} from '../pages/page-current/page-current.component';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss'],
  entryComponents: [PageCurrentComponent]
})
export class TabViewComponent implements OnInit {
  pageCurrent = PageCurrentComponent;

  constructor() { }

  ngOnInit() {
  }

}
