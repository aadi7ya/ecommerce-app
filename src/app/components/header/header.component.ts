import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // Declare Prerequisites
  public links: any;
  public session: boolean;

  constructor() {
    // Initialize Prerequisites
    this.links = [
      { name: "Home", path: "home", root: "root" },
      { name: "About", path: "about", root: "root" },
      { name: "Products", path: "products", root: "root" },
      { name: "Contact Us", path: "contact-us", root: "root" },
    ];

    this.session = true;
  }

  ngOnInit() {
  }

}
