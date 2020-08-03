import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  slides = [
    {img: "../../assets/images/swiggy.png",
     hed: "Flat 30% off",
     l1: "When you order from swiggy",
     l2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {img: "../../assets/images/logo2.png",
    hed: "Flat 30% off",
    l1: "When you order from swiggy",
    l2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
    {img: "../../assets/images/icici.png", hed: "Flat 30% off",
    l1: "When you order from swiggy",
    l2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {img: "../../assets/images/swiggy.png", hed: "Flat 30% off",
    l1: "When you order from swiggy",
    l2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {img:  "../../assets/images/swiggy.png", hed: "Flat 30% off",
    l1: "When you order from swiggy",
    l2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 4};
  
  addSlide() {
    this.slides.push({img: "../../assets/images/icici.png",
    hed: "Flat 30% off",
    l1: "When you order from swiggy",
    l2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    //console.log('slick initialized');
  }
  
  breakpoint(e) {
   // console.log('breakpoint');
  }
  
  afterChange(e) {
   // console.log('afterChange');
  }
  
  beforeChange(e) {
   // console.log('beforeChange');
  }
}
