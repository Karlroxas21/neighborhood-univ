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
  highlightName2:string = " Engineers";
  highlightName:string = " Alexander Sludds";
  highlight:string = "have used optics to accelerate machine-learning computations on smart speakers and other low-poer connected devices. \"We've built a system that can operate with about a milliwatt of power but still do trillions of multiplications per second,\" says"
  highlightDate:string = "October 25, 2022";


  //FEATURED ARTICLES
  aroundCampus:string= "On her first day as NU\'s president-elect, Sally Kornbluth was welcomed by faculty, staff, and students in a community gathering at what she called the \"world capital of intellectual fun.\" Earlier, at a press conference, she said: \"I believe this is NU\'s moment."
}
