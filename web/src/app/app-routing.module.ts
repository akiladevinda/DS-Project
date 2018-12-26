import { HomeComponent } from './home/home.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JobsComponent } from './jobs/jobs.component';
import { MensFashionComponent } from './mens-fashion/mens-fashion.component';
import { WomensFashionComponent } from './womens-fashion/womens-fashion.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { MobilePhonesComponent } from './mobile-phones/mobile-phones.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: 'mobile_phones', component: MobilePhonesComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'womens_fashion', component: WomensFashionComponent },
  { path: 'mens_fashion', component: MensFashionComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
