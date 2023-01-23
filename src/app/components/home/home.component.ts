import { Component } from '@angular/core';
import { constants } from '../../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  siteTitle = constants.siteTitle;
}
