import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuTopperService } from '../../services/menu-topper.service';

@Component({
  selector: 'topper',
  templateUrl: './topper.component.html',
  styleUrls: ['./topper.component.scss'],
})
export class TopperComponent implements OnInit {

  constructor(private menuTopperService:MenuTopperService,public route:Router) { }

  ngOnInit(): void {
    console.log(this.route.url)
  }
  onMenu(){
    this.menuTopperService.isActive = !this.menuTopperService.isActive;   
  }
  get active(): string{
    return this.menuTopperService.getClass();
  }
}
