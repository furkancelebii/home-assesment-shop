import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-b-page',
  templateUrl: './b-page.component.html',
  styleUrl: './b-page.component.scss'
})
export class BPageComponent {
  addProductForm = new FormGroup({
    name : new FormControl('',Validators.required),
    price : new FormControl(undefined, Validators.required),
    description: new FormControl(undefined,Validators.required)
  })

  get isEmpty(){
    return !this.addProductForm.get('name')?.value && !this.addProductForm.get('price')?.value &&!this.addProductForm.get('description')?.value
  }
  constructor(public menuService:MenuService){}

  reset(){
    this.addProductForm.reset()
  }

}
