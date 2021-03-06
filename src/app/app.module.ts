import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material design Modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { LifeStyleComponent } from './life-style/life-style.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { WesternWeddingsComponent } from './weddings/western-weddings/western-weddings.component';
import { WelnessAndSpaComponent } from './life-style/welness-and-spa/welness-and-spa.component';
import { ResortActivitiesComponent } from './life-style/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './life-style/experiences/experiences.component';
import { ExcursionsComponent } from './life-style/excursions/excursions.component';
import { ResturantComponent } from './food-and-beverage/resturant/resturant.component';
import { BarsComponent } from './food-and-beverage/bars/bars.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';


@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    FoodAndBeverageComponent,
    LifeStyleComponent,
    WeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SignupComponent,
    SigninComponent,
    ThaiWeddingsComponent,
    WesternWeddingsComponent,
    WelnessAndSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    ResturantComponent,
    BarsComponent,
    RoomsComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
