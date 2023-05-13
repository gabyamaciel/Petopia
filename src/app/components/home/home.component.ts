import { Component, OnInit, OnDestroy } from '@angular/core';
import { constants } from '../../constants';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  siteTitle = constants.siteTitle;
  images: string[] = [
    '/assets/petopia-banner.png',
    '/assets/petopia-banner2.png',
    '/assets/petopia-banner3.png',
  ];

  currentImage: string = this.images[0];
  currentIndex: number = 0;
  interval: any;

  ngOnInit(): void {
    this.startImageRotation();
  }

  ngOnDestroy(): void {
    this.stopImageRotation();
  }

  startImageRotation(): void {
    this.currentImage = this.images[this.currentIndex];
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 2000);
  }

  stopImageRotation(): void {
    clearInterval(this.interval);
  }
}
