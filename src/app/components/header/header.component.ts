import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // Declare Prerequisites
  public session: boolean;

  constructor() {
    // Initialize Prerequisites
    this.session = true;
  }

  ngOnInit() {
  }

}
