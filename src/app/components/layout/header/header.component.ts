import {
  Component,
  HostListener
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
import {
  MatDialogRef,
  MatDialog
} from '@angular/material/dialog';

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

  MobileViewMenuModal: MatDialogRef < MobileViewMenuModal > ;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll, true)
  }

  openModal() {
    this.MobileViewMenuModal = this.dialog.open(MobileViewMenuModal, {
      autoFocus: false,
      maxWidth: '100vw',
      width: '100vw',
      height: '100vh',
      closeOnNavigation: true,
      panelClass: 'mobile-view-modal',
      hasBackdrop: false
    });
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

@Component({
  selector: 'mobile-view-menu-modal',
  templateUrl: 'MobileViewMenuModal.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('menuAnimation', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('0.5s ease-in', style({
          opacity: 1
        }))
      ]),

      transition(':leave', [
        style({
          opacity: 1
        }),
        animate('0.5s ease-out', style({
          opacity: 0
        }))
      ]),
    ]),
    trigger('buttonAnimation', [
      transition(':enter', [
        query('.mobile-view-button', style({
          opacity: 0,
          transform: 'translateX(0)'
        }), {
          optional: true
        }),

        query('.mobile-view-button', stagger('160ms', [
          animate('0.5s 0.3s ease-in', keyframes([ //maybe 1.5s 1s ease-in
            style({
              opacity: 0,
              transform: 'translateX(-64px)',
              offset: 0
            }),
            style({
              opacity: .5,
              transform: 'translateX(16px)',
              offset: 0.4
            }),
            style({
              opacity: 1,
              transform: 'translateX(0px)',
              offset: 1
            })
          ]))
        ]), {
          optional: true
        })
      ])
    ]),
    trigger('closeButtonAnimation', [
      transition(':enter', [
        query('.mobile-view-close',
          animate('0.5s linear', keyframes([
            style({
              opacity: 0,
              transform: 'translateX(-50%)',
              offset: 0
            }),
            style({
              opacity: 0.5,
              transform: 'translateX(-25%)',
              offset: 0.5
            }),
            style({
              opacity: 1,
              transform: 'translateX(0)',
              offset: 1
            })
          ]))
        )
      ])
    ])
  ]
})

export class MobileViewMenuModal {

  public mobileViewProjects: boolean;

  constructor() {}

  openProjectsMenu() {
    this.mobileViewProjects = !this.mobileViewProjects;
  }
}
