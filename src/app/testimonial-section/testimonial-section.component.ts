import { Component, OnInit } from '@angular/core';
declare var $: any;





@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.scss']
})
export class TestimonialSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.owl-carousel').owlCarousel({
          // loop:true,
          margin:100,
          responsiveClass:true,
          nav: false,
          responsive:{
              0:{
                  items:1,
              },
              600:{
                  items:2,
              },
              1000:{
                  items:2,
                  loop:false,
                margin:100,

              }
          }
      })

  }

}
