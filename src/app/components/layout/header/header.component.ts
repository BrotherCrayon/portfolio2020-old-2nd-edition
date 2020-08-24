import {
  Component,
  HostListener,
  Input
} from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  keyframes
} from '@angular/animations';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('scrollFade', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(300)
      ]),

      transition(':leave', [
        style({
          opacity: 1
        }),
        animate(500)
      ])
    ])
  ]
})
export class HeaderComponent {

  @Input() sidenav: MatSidenav;

  public mobileViewProjects: boolean;

  constructor() { }

  openProjectsMenu() {
    this.mobileViewProjects = !this.mobileViewProjects;
  }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll, true)
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    if (window.pageYOffset > 550) {
      let element = document.getElementById('mobile-nav');
      element.classList.add('sticky');
    } else {
      let element = document.getElementById('mobile-nav');
      element.classList.remove('sticky');
    }
  }

}
