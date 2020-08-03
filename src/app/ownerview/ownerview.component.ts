import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ownerview',
  templateUrl: './ownerview.component.html',
  styleUrls: ['./ownerview.component.css']
})
export class OwnerviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slides = [
    { l1: "How It Works at Food Darzee",
            l2: "Ever wondered how we customise your meals, personalise your food and deliver them to you? Here is an insiders look at how we function.",
            img:"../../assets/images/img.png" },
            { l1: "How It Works at Food Darzee",
            l2: "Ever wondered how we customise your meals, personalise your food and deliver them to you? Here is an insiders look at how we function.",
            img:"../../assets/images/img.png" },
            { l1: "How It Works at Food Darzee",
            l2: "Ever wondered how we customise your meals, personalise your food and deliver them to you? Here is an insiders look at how we function.",
            img:"../../assets/images/img.png" },
            { l1: "How It Works at Food Darzee",
            l2: "Ever wondered how we customise your meals, personalise your food and deliver them to you? Here is an insiders look at how we function.",
            img:"../../assets/images/img.png" }
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 4};
  
  addSlide() {
    this.slides.push({ l1: "How It Works at Food Darzee",
    l2: "Ever wondered how we customise your meals, personalise your food and deliver them to you? Here is an insiders look at how we function.",
    img:"../../assets/images/img.png" })
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
}
