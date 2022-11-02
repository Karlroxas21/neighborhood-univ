import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {component: EducationComponent, path: 'education'},
  {component: HomeComponent, path: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
