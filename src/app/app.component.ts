import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  phoneNumber = 31634885527;
  url = 'linknaaroverzichtaddict.com/userid';
  urlEncodedMsg = encodeURI(`Visit my link, boyyyyy:\n${this.url}`);
}
