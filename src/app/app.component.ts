import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <topper></topper>
      <nav-menu></nav-menu>
      <div class="sections">
        <!-- <intro></intro>
        <projects></projects>
        <contacts></contacts> -->
        <router-outlet></router-outlet>
      </div>
    </div>
  `
  ,
  styleUrls: ['app-component.scss']
})
export class AppComponent {
  title = 'portfolio';
}
