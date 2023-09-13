import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  data: Carousel[] = [
    {
      image: "carousel-1.jpg",
      icon: "ni-camera-compact",
      header: "Get started with Argon",
      subtitle: "There’s nothing I really wanted to do in life that I wasn’t able to get good at."
    }
    , {
      image: "carousel-2.jpg",
      icon: "ni-bulb-61",
      header: "Faster way to create web pages",
      subtitle: "That’s my skill. I’m not really specifically talented at anything except for the ability to learn."
    }
    , {
      image: "carousel-3.jpg",
      icon: "ni-trophy",
      header: "Share with us your design tips!",
      subtitle: "Don’t be afraid to be wrong because you can’t learn anything from a compliment."
    }
  ];

}

export interface Carousel {
  image: string;
  icon: string;
  subtitle: string;
  header: string;
}
