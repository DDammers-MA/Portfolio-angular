// slider.component.ts
import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import data from '../../assets/json/data.json';
import { CommonModule } from '@angular/common';
import Typewriter from 't-writer.js';

register();

@Component({
  selector: 'app-slider',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  projecten = data.Uitgelichte_projecten;
}
