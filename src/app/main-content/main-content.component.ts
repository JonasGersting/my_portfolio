import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { WhyMeComponent } from '../why-me/why-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { TeamplayerComponent } from '../teamplayer/teamplayer.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeroComponent, WhyMeComponent, MySkillsComponent, MyProjectsComponent, TeamplayerComponent, ContactComponent ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements AfterViewInit {
  title = 'portfolio';

  ngAfterViewInit(): void {
    this.addIntersectionObserver();
  }

  private addIntersectionObserver() {
    const observerOptions = {
      root: null,
      threshold: 0.2
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-right');
        }
      });
    }, observerOptions);
    const targets = document.querySelectorAll('.scroll-animate');
    targets.forEach(target => observer.observe(target));
  }
}
