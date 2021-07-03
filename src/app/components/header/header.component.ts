import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  icon: string = "menu";

  toggleMenuIcon(): void {
    this.icon = (this.icon === "menu") ? "close" : "menu"; 
  }
}
