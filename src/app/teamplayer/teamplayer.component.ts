import { Component } from '@angular/core';

@Component({
  selector: 'app-teamplayer',
  standalone: true,
  imports: [],
  templateUrl: './teamplayer.component.html',
  styleUrl: './teamplayer.component.scss'
})
export class TeamplayerComponent {

  presentation: any = [
    {
      title: 'Collaborative',
      text: 'I excel in team environments, as demonstrated during a Kanban project named "Join," where I collaborated closely with two colleagues. Effective communication and coordination were key to our success.',
      img:'./../../../assets/img/group.png'
    },
    {
      title: 'Independent',
      text: 'I thrive working independently, proven by my development of a document and data visualization tool at work. This self-initiated project is now actively used, showcasing my ability to take initiative and deliver.',
      img:'./../../../assets/img/rocket.png'
    },
    {
      title: 'Adaptable',
      text: 'I adapt seamlessly to any situation, combining teamwork and independence. Whether collaborating or working solo, I adjust to meet the needs of the project efficiently.',
      img:'./../../../assets/img/scale.png'
    }
  ]
}
