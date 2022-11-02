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
  aroundCampus:string= "On her first day as NU\'s president-elect, Sally Kornbluth was welcomed by faculty, staff, and students in a community gathering at what she called the \"world capital of intellectual fun.\" Earlier, at a press conference, she said: \"I believe this is NU\'s moment.";
  secondArticle : string = "With donuts and cider in hand, students, faculty, and staff gathered on Hockfield Court to speak with President-elect Sally Kornbluth and celebrate her appointment.";
  thirdArticle : string = "In the Boston Globe, Linda Griffith underscored the pressing need to invest in studying women\’s health and menstruation science: \“We need a … scientific push for menstruation science, and a comfort level with the language that goes with it. It\’s time.\”";
  fourthArticle : string = "Geophysicist Leigh Royden studies the Earth\’s crust, how it changes when tectonic plates collide, and how that activity links to processes deep in the mantle. \“It\’s all connected in a way that we haven\’t quite articulated completely yet,\” she says.";
  fifthArticle : string = "Among MIT Halloween activities this year, Project Manus hosted a maker social. In addition to pumpkin carving with hand tools and power drills, students and staff laser-cut pumpkins and experimented with plasma-torched pumpkin designs.\"";
  sixthArticle : string = "Angela Koehler and the chemists, biologists, engineers, and computer scientists in her lab seek ways to drug \“undruggable\” targets. By taking aim at proteins that interact with these targets, researchers can disable them or reduce their impact, opening routes to new drugs.";
}
