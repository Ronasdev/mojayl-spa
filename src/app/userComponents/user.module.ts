import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { InfoSuppComponent } from './info-supp/info-supp.component';
import { ProfilComponent } from './profil/profil.component';
import { ResetEmailComponent } from './reset-email/reset-email.component';
import { ResetMobileComponent } from './reset-mobile/reset-mobile.component';
import { ResetAddressComponent } from './reset-address/reset-address.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

const route: Routes = [
  {path:'forgot-password',component:ForgotPasswordComponent},

];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    InfoSuppComponent,
    ProfilComponent,
    ResetEmailComponent,
    ResetMobileComponent,
    ResetAddressComponent,
    UpdatePasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ]
})
export class UserModule { }
