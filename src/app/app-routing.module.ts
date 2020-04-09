import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { OffersComponent } from './offers/offers.component';
import { LifeStyleComponent } from './life-style/life-style.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'signup', component: SignupComponent},
  {path:'signin', component: SigninComponent},
  {path:'accomodation', component: AccomodationComponent},
  {path:'foodAndBeverage', component: FoodAndBeverageComponent},
  {path:'lifeStyle', component: LifeStyleComponent},
  {path:'celebrations', component:CelebrationsComponent},
  {path:'offers', component: OffersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
