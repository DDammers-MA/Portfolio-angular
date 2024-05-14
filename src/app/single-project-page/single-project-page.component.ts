import { Component, OnInit} from '@angular/core';
import data from '../../assets/json/data.json'
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-single-project-page',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './single-project-page.component.html',
  styleUrl: './single-project-page.component.scss'
})
export class SingleProjectPageComponent implements OnInit{
  datas = data.Uitgelichte_projecten;
  data: any; 
  currentIndex = 0;


  constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        const dataId = +params['id'];
        this.data = data.Uitgelichte_projecten.find(data => data.id === dataId);

        this.currentIndex = 0;
      })
    }
    
  

  

}
