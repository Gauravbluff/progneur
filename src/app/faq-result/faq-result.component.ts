import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-faq-result',
  templateUrl: './faq-result.component.html',
  styleUrls: ['./faq-result.component.css']
})
export class FaqResultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('.filters ul li').click(function(){
            $('.filters ul li').removeClass('active');
            $(this).addClass('active');
      });

      $(function() {
            $(".filterItem").click(function(){
            var selectedClass = $(this).attr("data-rel");
                  $(".panelFAQ .card").hide();
                  $('.'+selectedClass+'').show();
            });
      });

      $('.moreCategory').click(function(){
            $('.hideD').attr('style', 'display: inline-block !important');
            $(this).hide();
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


