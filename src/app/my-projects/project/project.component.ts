import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core'; // Importiere Input

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project: any; // Definiere das @Input-Property

  ngOnInit(){
    console.log(this.project);
  }
  
}