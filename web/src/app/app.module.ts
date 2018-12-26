
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { SecondHeaderComponent } from './second-header/second-header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';

import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MobilePhonesComponent } from './mobile-phones/mobile-phones.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { WomensFashionComponent } from './womens-fashion/womens-fashion.component';
import { MensFashionComponent } from './mens-fashion/mens-fashion.component';
import { JobsComponent } from './jobs/jobs.component';
import { ElectronicsComponent } from './electronics/electronics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecondHeaderComponent,
    FooterComponent,
    HomeComponent,
    MobilePhonesComponent,
    VehiclesComponent,
    WomensFashionComponent,
    MensFashionComponent,
    JobsComponent,
    ElectronicsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatChipsModule,
    MatTabsModule,
    MatCardModule,

  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
