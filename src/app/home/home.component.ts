import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  // HIGHLIGHT TEXT
  highlightName:string = " Canan Dagdeviren";
  hightlight:string = "Accessories like shoes come in countless shapes and sizes\,\
  so \“Why cant you customize and design your mask?\ says"
  highlight2:string =  ". Her team developed a sensor that measures physical contact between a persons face and their mask\,\ to help design better-fitting options\.";
  highlightDate:string = "October 24, 2022";


  //FEATURED ARTICLES
  aroundCampus:string= "On her first day as MIT\'s president-elect, Sally Kornbluth was welcomed by faculty, staff, and students in a community gathering at what she called the \"world capital of intellectual fun.\" Earlier, at a press conference, she said: \"I believe this is MIT\'s moment."
}
