import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnInit {
  @Input() playerName: string = '';
  @Input() isActive: boolean = false;
  @Input() avatarUrl: string = '';

  private availableAvatars: string[] = [
    '/assets/img/profile-img/1.png',
    '/assets/img/profile-img/2.png',
    '/assets/img/profile-img/3.png',
    '/assets/img/profile-img/4.png',
    '/assets/img/profile-img/5.png',
    '/assets/img/profile-img/6.png',
    '/assets/img/profile-img/7.png',
    '/assets/img/profile-img/8.png',
    '/assets/img/profile-img/9.png',
    '/assets/img/profile-img/10.png',
    '/assets/img/profile-img/avatar.png'
  ];

  ngOnInit() {
    if (!this.avatarUrl) {
      this.avatarUrl = this.getRandomAvatar();
    }
  }

  private getRandomAvatar(): string {
    const randomIndex = Math.floor(Math.random() * this.availableAvatars.length);
    return this.availableAvatars[randomIndex];
  }
}
