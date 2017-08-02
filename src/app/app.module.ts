import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service'
import { AppRoutingModule } from './app-routing.module';
import { TournamentComponent } from './tournament/tournament.component';
import { CreatetournamentComponent } from './tournament/createtournament/createtournament.component';
import { TournamentListComponent } from './tournament/tournament-list/tournament-list.component'
import { TournamentService } from './tournament/tournament.service';
import { ManageTournamentComponent } from './manage-tournament/manage-tournament.component';
import { AddPlayerComponent } from './manage-tournament/add-player/add-player.component';
import { StandingsComponent } from './manage-tournament/standings/standings.component';
import { RoundComponent } from './manage-tournament/round/round.component';
import { PlayerListComponent } from './manage-tournament/add-player/player-list/player-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    TournamentComponent,
    CreatetournamentComponent,
    TournamentListComponent,
    ManageTournamentComponent,
    AddPlayerComponent,
    StandingsComponent,
    RoundComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, TournamentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
