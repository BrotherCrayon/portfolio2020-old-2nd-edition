import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DissComponent } from './components/proj/diss/diss.component';
import { ListifyComponent } from './components/proj/listify/listify.component';
import { SeriousGamesComponent } from './components/proj/serious-games/serious-games.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CardsViewComponent } from './components/cards-view/cards-view.component';
import { VirtualRealityComponent } from './components/proj/virtual-reality/virtual-reality.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  // { path: '', outlet: 'home', component: CarouselComponent },
  { path: '', component: CardsViewComponent, data: {animation: 'HomePage'} },
  { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
  { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'} },

  // projects - i want these nested so i can make another menu for them
  { path: 'diss', component: DissComponent, data: {animation: 'dissPage'}  },
  { path: 'listify', component: ListifyComponent, data: {animation: 'listifyPage'}   },
  { path: 'serious-games', component: SeriousGamesComponent, data: {animation: 'gamePage'}   },
  { path: 'virtual-reality', component: VirtualRealityComponent, data: {animation: 'vrPage'}   },

  { path: '**', component: NotFoundComponent, data: {animation: 'SubPage'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DissComponent, ListifyComponent, SeriousGamesComponent]
