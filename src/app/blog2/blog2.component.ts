import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-blog2',
  templateUrl: './blog2.component.html',
  styleUrls: ['./blog2.component.css']
})
export class Blog2Component implements OnInit {

  constructor() { }

  // ngOnInit() {
  // }
  ngOnInit(): void {
    $(document).ready(function () {
      $('.footermid1 h4 i').click(function () {
        $('.footermid1 h4 i').toggleClass('rotate180');
        $('.footermid1 ul').toggleClass('uldisplay');
      });
    });

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
        $('header').addClass('header1');
      } else {
        $('header').removeClass('header1');
      }
    });

    $('.postsSlider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
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
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    });
  }


}
