import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.footermid1 h4 i').click(function() {
            $('.footermid1 h4 i').toggleClass('rotate180');
            $('.footermid1 ul').toggleClass('uldisplay');
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
  }

}
