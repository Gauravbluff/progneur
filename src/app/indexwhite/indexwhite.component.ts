import { Component, OnInit } from '@angular/core';
// import $ from 'jquery';
declare const $:any;
@Component({
  selector: 'app-indexwhite',
  templateUrl: './indexwhite.component.html',
  styleUrls: ['./indexwhite.component.css']
})
export class IndexwhiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.footermid h4 i').click(function() {
            $('.footermid h4 i').toggleClass('rotate180');
            $('.footermid ul').toggleClass('uldisplay');
      });
});

$(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
            $("header").addClass("header1");
      }
      else {
            $("header").removeClass("header1");
      }
});

$('.offerSlider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      responsive: [
            {
                  breakpoint: 1024,
                  settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                  }
            },
            {
                  breakpoint: 767,
                  settings: "unslick"
            }
      ]
});

$('.characters').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      responsive: [
            {
                  breakpoint: 1024,
                  settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                  }
            },
            {
                  breakpoint: 600,
                  settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                  }
            },
            {
                  breakpoint: 480,
                  settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                  }
            }
      ]
});

$('.stories').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      responsive: [
            {
                  breakpoint: 1024,
                  settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                  }
            },
            {
                  breakpoint: 600,
                  settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                  }
            },
            {
                  breakpoint: 480,
                  settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                  }
            }
      ]
});

$('.imgSwap1').click(function(){
      $(this).css('z-index', '6');
      $('.imgSwap2').css('z-index', '5');
      $('.imgSwap3').css('z-index', '4');
});
$('.imgSwap2').click(function(){
      $('.imgSwap1, .imgSwap3').css('z-index', '5');
      $(this).css('z-index', '6');
});

$('.imgSwap3').click(function(){
      $('.imgSwap1').css('z-index', '4');
      $(this).css('z-index', '6');
      $('.imgSwap2').css('z-index', '5');
});

$('.imgSwapC1').click(function(){
      $(this).css('z-index', '6');
      $('.imgSwapC2').css('z-index', '5');
      $('.imgSwapC3').css('z-index', '4');
});
$('.imgSwapC2').click(function(){
      $('.imgSwapC1, .imgSwapC3').css('z-index', '5');
      $(this).css('z-index', '6');
});

$('.imgSwapC3').click(function(){
      $('.imgSwapC1').css('z-index', '4');
      $(this).css('z-index', '6');
      $('.imgSwapC2').css('z-index', '5');
});

$('.imgBaked1').click(function(){
      $(this).css('z-index', '6');
      $('.imgBaked2').css('z-index', '5');
      $('.imgBaked3').css('z-index', '4');
});
$('.imgBaked2').click(function(){
      $('.imgBaked1, .imgBaked3').css('z-index', '5');
      $(this).css('z-index', '6');
});

$('.imgBaked3').click(function(){
      $('.imgBaked1').css('z-index', '4');
      $(this).css('z-index', '6');
      $('.imgBaked2').css('z-index', '5');
});

  }
  slides = [
    {img: "../../assets/images/test1.png",
     img1: "../../assets/images/test2.png",
     p1:  "Shikha Roy",
     p2: "I’ve lost 9 kgs in 2 months! <br>Sustained weight loss, heightened confidence, mother-like customer service. It’s a bargain."
  
  },
  {img: "../../assets/images/test1.png",
  img1: "../../assets/images/test2.png",
  p1:  "Shikha Roy",
  p2: "I’ve lost 9 kgs in 2 months! <br>Sustained weight loss, heightened confidence, mother-like customer service. It’s a bargain."

},{img: "../../assets/images/test1.png",
img1: "../../assets/images/test2.png",
p1:  "Shikha Roy",
p2: "I’ve lost 9 kgs in 2 months! <br>Sustained weight loss, heightened confidence, mother-like customer service. It’s a bargain."

},{img: "../../assets/images/test1.png",
img1: "../../assets/images/test2.png",
p1:  "Shikha Roy",
p2: "I’ve lost 9 kgs in 2 months! <br>Sustained weight loss, heightened confidence, mother-like customer service. It’s a bargain."

}
  ]
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 3};
  
  addSlide() {
    this.slides.push({img: "../../assets/images/test1.png",
    img1: "../../assets/images/test2.png",
    p1:  "Shikha Roy",
    p2: "I’ve lost 9 kgs in 2 months! <br>Sustained weight loss, heightened confidence, mother-like customer service. It’s a bargain."
 
 })
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    //console.log('slick initialized');
  }
  
  breakpoint(e) {
    //console.log('breakpoint');
  }
  
  afterChange(e) {
    //console.log('afterChange');
  }
  
  beforeChange(e) {
   // console.log('beforeChange');
  }
}
