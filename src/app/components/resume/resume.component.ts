import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/skills.models';
import SkillSet from '../../../assets/skills.json'
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  skills:Skills = {
    back: [],
    front: [],
    other: []
  }
  constructor() { }

  ngOnInit(): void {
    this.skills = SkillSet;
  }

}
