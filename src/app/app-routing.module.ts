import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APageComponent } from './pages/a-page/a-page.component';
import { BPageComponent } from './pages/b-page/b-page.component';

const routes: Routes = [
  { path:'a-page' , component: APageComponent },
  { path:'b-page' , component: BPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
