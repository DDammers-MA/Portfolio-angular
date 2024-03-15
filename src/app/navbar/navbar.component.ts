import { Component , HostListener, Renderer2, ElementRef } from '@angular/core';

import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;

   constructor(private renderer: Renderer2) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }
}

  
