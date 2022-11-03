import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Highlight Text
  hText : string = "At NU, we revel in a culture of learning by doing. In";
  hTextLink : string = " 30 departments across five schools and one college";
  hText2 : string = ", our students combine analytical rigor with curiosity, playful imagination, and an apetite for solving the hardest problems in";
  hTextLink2 : string = " service to society.";
}
