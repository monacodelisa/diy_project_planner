import { Component } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      state('0', style({ opacity: 0 })),
      state('1', style({ opacity: 1 })),
      transition('* => 1', [
        animate('1500ms', keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 1, offset: 1 })
        ]))
      ]),
      transition('1 => 0', [
        animate('1500ms', keyframes([
          style({ opacity: 1, offset: 0 }),
          style({ opacity: 0, offset: 1 })
        ]))
      ]),
    ])
  ]
})
export class HomeComponent {
  images: string[] = [
    'assets/images/intro-carousel/1.jpg',
    'assets/images/intro-carousel/2.jpg',
    'assets/images/intro-carousel/3.jpg',
    'assets/images/intro-carousel/4.jpg',
    'assets/images/intro-carousel/5.jpg'
  ];
  currentSlide = 0;

  constructor() {
    setInterval(() => this.nextSlide(), 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }
}
