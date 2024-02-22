import { Component } from '@angular/core';
import Typewriter from 't-writer.js';





@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
  
})
export class HomeComponent {

  ngOnInit(): void{

    const target = document.querySelector('.tw')
    const target2 = document.querySelector('.tw2')
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'black'
    })
    
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
      .start()
  }

}
