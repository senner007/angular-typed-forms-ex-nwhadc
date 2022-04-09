import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hero-overview',
  templateUrl: 'hero-overview.component.html',
  styles: [
  ]
})
export class HeroOverviewComponent implements OnInit {
  @Input() formGroup?: FormGroup;
  constructor() { }

  ngOnInit(): void {
    console.log(this.formGroup?.valueChanges.subscribe(val => {
      console.log(val)
    }))
  }

}
