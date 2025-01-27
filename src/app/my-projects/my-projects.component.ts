import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectComponent } from "./project/project.component";

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent, ProjectComponent],
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {
  activeButton: number | null = 1;  
  activateBtn(position: number) {
    if (this.activeButton === position) {
      this.activeButton = null;
    } else {
      this.activeButton = position;
    }
  }
}
