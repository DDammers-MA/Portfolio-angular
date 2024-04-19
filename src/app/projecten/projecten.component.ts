import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { register } from 'swiper/element/bundle'
register()
import data from '../../assets/json/data.json'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projecten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projecten.component.html',
  styleUrl: './projecten.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectenComponent {
 
  data = data.Uitgelichte_projecten;

  constructor() {
    console.log(this.data);
    this.getScreenWidth();
  }


  slidesPerView:number = 3;
  screenWidth!: number;

  @HostListener('window:resize')
  getScreenWidth(){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth >= 320 && this.screenWidth <= 700){
      this.slidesPerView = 1;
    }
   else if(this.screenWidth >= 700 && this.screenWidth <= 1000){
      this.slidesPerView = 2;
    }
    else if(this.screenWidth >= 1000 && this.screenWidth <= 1200){
      this.slidesPerView = 3;
    }
  }
}
