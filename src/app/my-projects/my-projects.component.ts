import { CommonModule } from '@angular/common';
import { Component, HostListener  } from '@angular/core';
import { ProjectComponent } from "./project/project.component";

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent, ProjectComponent],
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {
  activeButton: any = 0;
  triggerAnimation: boolean = false;
  showTitle: boolean = window.innerWidth > 1200;
  projects: any = [
    { title: 'El pollo Loco',
      headline1:'About the project',
      description1: 'This App is a Slack Clone App. <br> It revolutionizes team communication and collaboratin with its intuitive <br> interface, real-time messaging, and robust channel organization.', 
      duration: '3 Weeks',
      headline2: 'How I have organised my work', 
      description2: 'This App is a Slack Clone App. <br> It revolutionizes team communication and collaboratin with its intuitive <br> interface, real-time messaging, and robust channel organization.',
      headline3: ' My group work experience',
      description3: 'This App is a Slack Clone App. <br> It revolutionizes team communication and collaboratin with its intuitive <br> interface, real-time messaging, and robust channel organization.',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/screenshotProject.png'
    },
    { title: 'Join',
      headline1:'Join',
      description1: 'A spicy chicken restaurant app', 
      duration: '3 Weeks',
      headline2: 'How I have organised my work', 
      description2: 'lorem ipsum etcs fsdjfklsd',
      headline3: ' My group work experience',
      description3: 'asldfkjsldjflösadfjsldfj',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/screenshotProject.png'
    },
    { title: 'Ring of Fire',
      headline1:'Ring of Fire',
      description1: 'A spicy chicken restaurant app', 
      duration: '3 Weeks',
      headline2: 'How I have organised my work', 
      description2: 'lorem ipsum etcs fsdjfklsd',
      headline3: ' My group work experience',
      description3: 'asldfkjsldjflösadfjsldfj',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/screenshotProject.png'
    },
    { title: 'Ring of Fire',
      headline1:'Ring of Fire',
      description1: 'A spicy chicken restaurant app', 
      duration: '3 Weeks',
      headline2: 'How I have organised my work', 
      description2: 'lorem ipsum etcs fsdjfklsd',
      headline3: ' My group work experience',
      description3: 'asldfkjsldjflösadfjsldfj',
      technologies: ['./../../assets/img/HTML.png', './../../assets/img/CSS.png', './../../assets/img/Javascript.png'],
      img: './../../assets/img/screenshotProject.png'
    },
  
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.showTitle = window.innerWidth > 900;
  }
 
  activateBtn(position: number) {
    this.triggerAnimation = false; 
    setTimeout(() => {
      this.activeButton = position;
      this.triggerAnimation = true; 
    }, 50); 
  }
}
