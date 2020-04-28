import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsViewComponent } from './components/cards-view/cards-view.component';
import { CarouselComponent } from './components/carousel/carousel.component';

// imported modules (premade stuff)
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CardsViewComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
