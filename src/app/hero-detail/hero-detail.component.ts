import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styles: [
  ]
})
export class HeroDetailComponent implements OnInit {

  @Input() formGroup?: FormGroup;
  constructor() { }

  ngOnInit(): void {
    
  }

}
