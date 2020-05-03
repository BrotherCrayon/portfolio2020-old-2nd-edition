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


const routes: Routes = [
  // { path: '', outlet: 'home', component: CarouselComponent },
  { path: '', component: CardsViewComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  // projects - i want these nested so i can make another menu for them
  { path: 'diss', component: DissComponent },
  { path: 'listify', component: ListifyComponent },
  { path: 'serious-games', component: SeriousGamesComponent },
  { path: 'virtual-reality', component: VirtualRealityComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DissComponent, ListifyComponent, SeriousGamesComponent]
