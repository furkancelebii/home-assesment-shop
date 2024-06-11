import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../../services/menu.service';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-a-page',
  templateUrl: './a-page.component.html',
  styleUrl: './a-page.component.scss'
})
export class APageComponent {
  addProductForm = new FormGroup({
    name : new FormControl('',Validators.required),
    price : new FormControl(undefined, Validators.required),
    description: new FormControl(undefined,Validators.required)
  })

  get isEmpty(){
    return !this.addProductForm.get('name')?.value && !this.addProductForm.get('price')?.value &&!this.addProductForm.get('description')?.value
  }
  constructor(public menuService:MenuService,private shopService:ShopService){}

  reset(){
    this.addProductForm.reset()
  }

  add(){
    this.shopService.addProduct(this.addProductForm.value as any).subscribe(()=>{
      this.reset()
    })
  }
}
