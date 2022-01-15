import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopperComponent } from './components/topper/topper.component';
import { IntroComponent } from './components/intro/intro.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat.module';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MenuTopperService } from './services/menu-topper.service';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactService } from './services/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopperComponent,
    IntroComponent,
    ProjectsComponent, 
    ContactsComponent,
    NavMenuComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MenuTopperService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
