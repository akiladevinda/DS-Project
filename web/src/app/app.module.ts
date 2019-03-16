import { CommonModule } from '@angular/common';


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
import {MatIconModule} from '@angular/material/icon';


import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MobilePhonesComponent } from './mobile-phones/mobile-phones.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { WomensFashionComponent } from './womens-fashion/womens-fashion.component';
import { MensFashionComponent } from './mens-fashion/mens-fashion.component';

import { ElectronicsComponent } from './electronics/electronics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import { ItemDetailsPageComponent } from './item-details-page/item-details-page.component';
import { PostAddComponent } from './post-add/post-add.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './login/login.component';


import { BackendApiService } from './-backend-api.service';
import { MyadsComponent } from './myads/myads.component';

import {MatSnackBarModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';








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

    ElectronicsComponent,
    ItemDetailsPageComponent,
    PostAddComponent,
    LoginComponent,
    MyadsComponent,


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
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule, ReactiveFormsModule,
    MatSnackBarModule,
    CommonModule,
    HttpClientModule,


  ],


  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
