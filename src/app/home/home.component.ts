import { Component, Inject, PLATFORM_ID, AfterViewInit, OnInit, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import Typewriter from 't-writer.js';

import { isPlatformBrowser } from '@angular/common';

import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle'

import { OverMijComponent } from '../over-mij/over-mij.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectenComponent } from '../projecten/projecten.component';

register()

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, OverMijComponent, SkillsComponent, ProjectenComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  constructor() { }

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
        .changeTypeColor('#EDEDED')
        .type('I am a ')
        .removeCursor()
        .then(writer2.start.bind(writer2))
        .start()
    
      writer2
        .changeTypeColor('#DA0037')
        .type("Software developer")
        .rest(500)
        .clear()
        .changeTypeColor('#6C22A6')
        .type("Programmer")
        .rest(500)
        .clear()
        .changeTypeColor('#387ADF')
        .type("Frond-end developer")
        .rest(500)
        .clear()
        .changeTypeColor('black')
        .then(writer1.start.bind(writer1))
    
    }



  }
  

