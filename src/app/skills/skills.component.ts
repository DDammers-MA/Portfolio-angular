import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
 
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.reveal();
  }

  reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = (reveals[i] as HTMLElement).getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        (reveals[i] as HTMLElement).classList.add("active");
      } else {
        (reveals[i] as HTMLElement).classList.remove("active");
      }
    }
  }
}
