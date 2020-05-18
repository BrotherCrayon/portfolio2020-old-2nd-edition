import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('menuAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in', style({ opacity: 1 }))
      ]),

      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.5s ease-out', style({ opacity: 0 }))
      ]),
    ]),
    trigger('buttonAnimation', [
      transition(':enter', [
        query('.mobile-view-button', style({ opacity: 0, transform: 'translateX(0)' }), { optional: true }),

        query('.mobile-view-button', stagger('160ms', [
          animate('0.5s 0.3s ease-in', keyframes([ //maybe 1.5s 1s ease-in
            style({ opacity: 0, transform: 'translateX(-64px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(16px)', offset: 0.4 }),
            style({ opacity: 1, transform: 'translateX(0px)', offset: 1 })
          ]))]), { optional: true })
      ])
    ])
  ]
})
export class HeaderComponent {
  constructor() { }

  ngOnInit() {
  }

  public mobileViewMenu = false;
  openMenu() {
    this.mobileViewMenu = true;
  }
  closeMenu() {
    this.mobileViewMenu = false;
  }

}
