import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-page-one-body',
  templateUrl: './page-one-body.component.html',
  styleUrls: ['./page-one-body.component.css']
})
export class PageOneBodyComponent  {
  HowItWorks= "assets/images/howitworks.jpg";
  Lemon= "assets/images/lemon.jpg";
  @Input() logo:string;
}
