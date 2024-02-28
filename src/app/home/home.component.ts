import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import Typewriter from 't-writer.js';

import { isPlatformBrowser } from '@angular/common';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const target = document.querySelector('.tw');
        console.log('Target element:', target);

        const writer = new Typewriter(target, {
          loop: true,
          typeSpeed: 80,
          deleteSpeed: 80,
          typeColor: 'black'
        });

        writer
          .type("I am a Software Developer.")
          .rest(500)
          .changeOps({ deleteSpeed: 80 })
          .remove(19)
          .type('Programmer.')
          .rest(500)
          .remove(11)
          .type('Front-end developer.')
          .rest(500)
          .changeOps({ deleteSpeed: 20 })
          .remove(21)
          .clear()
          .start();
      },500)
  }
  }
}
