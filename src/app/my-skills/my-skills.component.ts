import { Component } from '@angular/core';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { CurrentlyLearningComponent } from './currently-learning/currently-learning.component';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [SkillSetComponent, CurrentlyLearningComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

 
  

}
