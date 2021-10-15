import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceResumeComponent } from './components/annonce-resume/annonce-resume.component';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { AnnoncesComponent } from './components/annonces/annonces.component';
import { DateComponent } from './components/date/date.component';
import { ExpdPaysComponent } from './components/expd-pays/expd-pays.component';
import { ExpdVilleComponent } from './components/expd-ville/expd-ville.component';
import { ForOhForComponent } from './components/for-oh-for/for-oh-for.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { PaysComponent } from './components/pays/pays.component';
import { PoidsComponent } from './components/poids/poids.component';
import { VilleComponent } from './components/ville/ville.component';
import { HomeComponent } from './home/home.component';
import { UsingConditionsComponent } from './public/using-conditions/using-conditions.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ForgotPasswordComponent } from './userComponents/forgot-password/forgot-password.component';
import { InfoSuppComponent } from './userComponents/info-supp/info-supp.component';
import { LoginComponent } from './userComponents/login/login.component';
import { ProfilComponent } from './userComponents/profil/profil.component';
import { RegisterComponent } from './userComponents/register/register.component';
import { ResetAddressComponent } from './userComponents/reset-address/reset-address.component';
import { ResetEmailComponent } from './userComponents/reset-email/reset-email.component';
import { ResetMobileComponent } from './userComponents/reset-mobile/reset-mobile.component';
import { ResetPasswordComponent } from './userComponents/reset-password/reset-password.component';
import { UpdatePasswordComponent } from './userComponents/update-password/update-password.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'reset-email',canActivate:[AuthGuardService], component:ResetEmailComponent},
  {path:'update-password',canActivate:[AuthGuardService],component:UpdatePasswordComponent},
  {path:'reset-mobile',canActivate:[AuthGuardService], component:ResetMobileComponent},
  {path:'reset-address',canActivate:[AuthGuardService], component:ResetAddressComponent},
  {path:'home',canActivate:[AuthGuardService], component:HomeComponent},
  {path:'profil',canActivate:[AuthGuardService], component:ProfilComponent},
  {path:'register/supp',canActivate:[AuthGuardService],component:InfoSuppComponent},
  {path:'using-conditions',canActivate:[AuthGuardService], component:UsingConditionsComponent},
  {path:'transporter/country',canActivate:[AuthGuardService], component:PaysComponent},
  {path:'transporter/city/:id',canActivate:[AuthGuardService],component:VilleComponent},
  {path:'transporter/date',canActivate:[AuthGuardService],component:DateComponent},
  {path:'transporter/weight',canActivate:[AuthGuardService],component:PoidsComponent},
  {path:'annonce-resume',canActivate:[AuthGuardService],component:AnnonceResumeComponent},
  {path:'annonces',canActivate:[AuthGuardService],component:AnnoncesComponent},
  {path:'annonce/:id',canActivate:[AuthGuardService],component:AnnonceComponent},
  {path:'expediteur/country',canActivate:[AuthGuardService], component:ExpdPaysComponent},
  {path:'expediteur/city/:id',canActivate:[AuthGuardService],component:ExpdVilleComponent},
  {path:'poster/message',canActivate:[AuthGuardService],component:MessengerComponent},
  {path:"not-found",component:ForOhForComponent},
  {path:"**",redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
