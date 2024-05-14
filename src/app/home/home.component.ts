import { Component, Inject, PLATFORM_ID, AfterViewInit, OnInit, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import Typewriter from 't-writer.js';

import { isPlatformBrowser } from '@angular/common';

import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle'

import { OverMijComponent } from '../over-mij/over-mij.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectenComponent } from '../projecten/projecten.component';

import { RouterLink } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';

register()

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, OverMijComponent, SkillsComponent, ProjectenComponent, RouterLink, ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
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

  ngOnInit(): void {
  
      const target = document.querySelector('.tw')
      const target2 = document.querySelector('.tw2')


      const writer1 = new Typewriter(target, {
        typeSpeed: 60,
   
      })
    
      const writer2 = new Typewriter(target2, {
        typeSpeed: 60
      })
    
      writer1
        .changeTypeColor('#F5EDED')
        .type('I am a ')
        .removeCursor()
        .then(writer2.start.bind(writer2))
        .start()
    
      writer2
        .changeTypeColor('#DA0037')
        .type("Software developer")
        .rest(500)
        .clear()
        .changeTypeColor('#DA0037')
        .type("Programmer")
        .rest(500)
        .clear()
        .changeTypeColor('#DA0037')
        .type("Frond-end developer")
        .rest(500)
        .clear()
        .changeTypeColor('black')
        .then(writer1.start.bind(writer1))
    
    }



  }
  

