import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ResearchComponent } from './research/research.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { NewsComponent } from './news/news.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';


const routes: Routes = [
  {component: EducationComponent, path: 'education'},
  {component: ResearchComponent, path: 'research'},
  {component: AboutComponent, path: 'about'},
  {component: LoginComponent, path: 'login'},
  {component: HomeComponent, path: ''},
  {component: AdmissionsComponent, path: 'admissions'},
  {component: NewsComponent, path: 'news'},
  {component: EnrollmentComponent, path: 'enrollment'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
