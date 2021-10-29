import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './public/header/header.component';
import { FooterComponent } from './public/footer/footer.component';
import { UserModule } from './userComponents/user.module';
import { HomeComponent } from './home/home.component';
import { UsingConditionsComponent } from './public/using-conditions/using-conditions.component';
import { PaysComponent } from './components/pays/pays.component';
import { VilleComponent } from './components/ville/ville.component';
import { DateComponent } from './components/date/date.component';
import { PoidsComponent } from './components/poids/poids.component';
import { AnnoncesComponent } from './components/annonces/annonces.component';
import { AnnonceResumeComponent } from './components/annonce-resume/annonce-resume.component';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { ForOhForComponent } from './components/for-oh-for/for-oh-for.component';


import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AnnonceUpdateComponent } from './components/annonce-update/annonce-update.component';
import { ExpdPaysComponent } from './components/expd-pays/expd-pays.component';
import { ExpdVilleComponent } from './components/expd-ville/expd-ville.component';
import { ConversationsComponent } from './components/conversations/conversations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UsingConditionsComponent,
    PaysComponent,
    VilleComponent,
    DateComponent,
    PoidsComponent,
    AnnoncesComponent,
    AnnonceResumeComponent,
    AnnonceComponent,
    MessengerComponent,
    ForOhForComponent,
    AnnonceUpdateComponent,
    ExpdPaysComponent,
    ExpdVilleComponent,
    ConversationsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    UserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
