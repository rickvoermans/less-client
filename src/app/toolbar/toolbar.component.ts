import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {
  public val = 0;

  constructor() {
    setInterval(() => {
      this.val = (this.val + 10) % 110;
    }, 800);
  }

  ngOnInit() {
  }

}
