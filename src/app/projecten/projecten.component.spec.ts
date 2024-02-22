import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectenComponent } from './projecten.component';

describe('ProjectenComponent', () => {
  let component: ProjectenComponent;
  let fixture: ComponentFixture<ProjectenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
