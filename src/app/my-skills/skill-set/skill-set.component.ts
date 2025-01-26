
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {


  mySkills: any = [
    {
      "img": "./../../../assets/img/Angular.png",
      "title": "Angular"
    },
    {
      "img": "./../../../assets/img/TypeScript.png",
      "title": "TypeScript"
    },
    {
      "img": "./../../../assets/img/Javascript.png",
      "title": "JavaScript"
    },
    {
      "img": "./../../../assets/img/HTML.png",
      "title": "HTML"
    },
    {
      "img": "./../../../assets/img/CSS.png",
      "title": "CSS"
    },
    {
      "img": "./../../../assets/img/Api.png",
      "title": "Rest-Api"
    },
    {
      "img": "./../../../assets/img/Firebase.png",
      "title": "Firebase"
    },
    {
      "img": "./../../../assets/img/Git.png",
      "title": "GIT"
    },
    {
      "img": "./../../../assets/img/MaterialDesign.png",
      "title": "Material Design"
    },
    {
      "img": "./../../../assets/img/Scrum.png",
      "title": "Scrum"
    }
  ]

}
