import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IntroComponent implements OnInit {
  command:string = ''

  constructor() { }
  ngOnInit(): void {
  }

  typed(key:any){
    this.command +=key; 
    console.log(key);
    
  }
}
