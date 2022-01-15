import { Component, Input, OnInit } from '@angular/core';
import { MenuTopperService } from '../../services/menu-topper.service';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  constructor(private menuTopperService:MenuTopperService) { }

  ngOnInit(): void {
  }

  get active(): string{
    return this.menuTopperService.getClass();
  }
  desactive(){
    this.menuTopperService.isActive = false;
  }
}
