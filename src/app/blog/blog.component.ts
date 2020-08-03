import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slides = [
    {img: "../../assets/images/img4.png"},
    {img: "../../assets/images/img5.png"},
    {img: "../../assets/images/blogImg.png"},
    {img: "../../assets/images/img6.png"}
  ];

  //If we add more than 4 images then the slider will be active.
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1};
  
  addSlide() {
    this.slides.push({img: "../../assets/images/img6.png"})
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