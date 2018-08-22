import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  person = "assets/images/person.png"
  @Input() imperfectLogo:string;
}
