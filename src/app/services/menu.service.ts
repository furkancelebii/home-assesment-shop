import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  color="white"

  constructor() { }

  changeMenuColor(color:string){
    this.color = color
  }
  
}

