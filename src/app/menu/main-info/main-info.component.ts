import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {
  public completed = 'U bent op 45% van het volgende level';
  public neededXP: number;
  public currentXP: number;

  constructor() {
    this.neededXP = 50;
    this.currentXP = 1;
  }

  ngOnInit() {
  }

  getCurrentXP() {
    return '90%';
  }
}
