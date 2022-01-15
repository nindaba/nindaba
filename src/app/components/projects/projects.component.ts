import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import Projects from '../../../assets/projects.json';
@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:Project[] =[];
  constructor() { }

  ngOnInit(): void {
    this.projects = Projects;    
  }

}
