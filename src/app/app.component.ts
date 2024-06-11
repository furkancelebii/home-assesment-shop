import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'home-assesment-shop';
  constructor(public menuService:MenuService){}

  changeColorRed(){
    this.menuService.changeMenuColor('red')
  }
  changeColorGreen(){
    this.menuService.changeMenuColor('green')
  }
  changeColorBlue(){
    this.menuService.changeMenuColor('blue')
  }
  changeColorPink(){
    this.menuService.changeMenuColor('pink')
  }
  changeColorWhite(){
    this.menuService.changeMenuColor('white')
  }
}
