import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service'
import { AppRoutingModule } from './app-routing.module';
import { TournamentComponent } from './tournament/tournament.component';
import { CreatetournamentComponent } from './tournament/createtournament/createtournament.component';
import { TournamentListComponent } from './tournament/tournament-list/tournament-list.component'
import { TournamentService } from './tournament/tournament.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    TournamentComponent,
    CreatetournamentComponent,
    TournamentListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, TournamentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
