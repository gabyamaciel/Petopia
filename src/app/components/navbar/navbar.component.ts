import { Component } from '@angular/core';
import { constants } from '../../constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  siteTitle = constants.siteTitle;
}
