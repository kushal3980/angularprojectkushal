import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { CustomiseComponent } from './customise/customise.component';
import { Customise1Component } from './customise1/customise1.component';
import { FeaturesComponent } from './features/features.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'', component: LoginComponent},
  {path: 'features',canActivate: [AuthGuard], component: FeaturesComponent},
  {path: 'features/cart',  canActivate: [AuthGuard],component: CartComponent},
  {path: 'feedback', canActivate: [AuthGuard] ,component: FeedbackComponent},
  {path: 'customise', canActivate: [AuthGuard], component: CustomiseComponent},
  {path: 'customise/customise1', canActivate: [AuthGuard], component: Customise1Component},
  {path: 'features/cart/customise/customise1', canActivate: [AuthGuard], component: Customise1Component},
  {path:'about-us', canActivate: [AuthGuard], component: AboutUsComponent},
  {path:'home',
  canActivate: [AuthGuard],
   component: HomeComponent,
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'features', component: FeaturesComponent},
    {path: 'features/cart', component: CartComponent},
    {path: 'customise', component: CustomiseComponent},
    {path: 'customise/customise1', component: Customise1Component},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'feedback', component: FeedbackComponent},
    
    {path: '', component: HomeComponent}
  ]
  },
  {path:'forget-password', component: ForgotComponent},
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
