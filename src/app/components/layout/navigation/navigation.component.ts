import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { trigger, transition, style, animate, keyframes, query, stagger } from '@angular/animations';
import { ThemeService } from 'src/app/theme';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    trigger('buttonAnimation', [
      transition(':enter', [
        query('.sidenav-button', style({
          opacity: 0,
          transform: 'translateX(0)'
        }), {
          optional: true
        }),

        query('.sidenav-button', stagger('160ms', [
          animate('0.5s 0.3s ease-in', keyframes([ // maybe 1.5s 1s ease-in
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
  ]
})
export class NavigationComponent {
  @ViewChild('menu', {static: true}) menu: MatMenu

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private themeService: ThemeService) { }

  public mobileViewProjects: boolean;
  // tslint:disable-next-line: no-inferrable-types
  navOpen: boolean = false;
  openProjectsMenu() {
    this.mobileViewProjects = !this.mobileViewProjects;
  }


  toggleTheme(theme: string) {
    this.themeService.setTheme(theme);
  }


}
