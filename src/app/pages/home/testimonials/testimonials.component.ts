import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  public testimonials: any;

  constructor() {
    this.testimonials = [
      { "name": "testi #1" },
      { "name": "testi #2" },
    ];
  }

  ngOnInit() {
  }

}
