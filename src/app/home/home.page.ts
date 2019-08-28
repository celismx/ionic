import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  artists = [{}, {}, {}, {}, {}, {}, {}, {}];
  slideOps = {
    initialSlide: 2,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 400
  };
  constructor() {}
}
