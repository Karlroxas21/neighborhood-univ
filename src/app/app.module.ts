import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ResearchComponent } from './research/research.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    ResearchComponent,
    FooterComponent,
    AboutComponent,
    LoginComponent,
    AdmissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
