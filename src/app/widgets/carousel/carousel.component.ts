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
      header: "Havana Club Internacional",
      subtitle: "Produciendo el mejor ron para usted."
    }
    , {
      image: "carousel-2.jpg",
      icon: "ni-bulb-61",
      header: "Edición limitada",
      subtitle: "Lo mejor de lo mejor."
    }
    , {
      image: "carousel-3.jpg",
      icon: "ni-trophy",
      header: "Máximo",
      subtitle: "Cien años de sabor en un frasco."
    }
  ];

}

export interface Carousel {
  image: string;
  icon: string;
  subtitle: string;
  header: string;
}
