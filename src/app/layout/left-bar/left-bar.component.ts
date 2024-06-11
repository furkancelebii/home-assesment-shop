import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrl: './left-bar.component.scss'
})
export class LeftBarComponent {

  constructor(private menuService:MenuService){}

  changeColor(color:string){
    this.menuService.changeMenuColor(color)
  }
}
