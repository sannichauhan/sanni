import { Component, VERSION } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-carousel-demo';
  customOptions: OwlOptions = {
    autoplay: true,
    loop: false,
    dots: true,
    nav: false,
    // navText: "",
    touchDrag: true,
    mouseDrag: false,
    items: 3,
    smartSpeed: 1000,
    margin: 15,
    responsive: {
      0: {
        items: 1,
        loop: true,
      },
      991: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
}
