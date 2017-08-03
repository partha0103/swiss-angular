import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/authguard.service';
import { TournamentComponent } from './tournament/tournament.component';
import { NotAuthGuard } from './auth/notauthguard.service';
import { ManageTournamentComponent } from './manage-tournament/manage-tournament.component';
import { StandingsComponent } from './manage-tournament/standings/standings.component'

const routes: Routes = [
    { path: 'signin', component: SigninComponent, canActivate: [NotAuthGuard] },
    { path: 'signup', component: SignupComponent, canActivate: [NotAuthGuard]},
    { path: 'home', component: TournamentComponent, canActivate: [AuthGuard]},
    { path: 'home/tournament/:id', component: ManageTournamentComponent, canActivate: [AuthGuard]},
    { path: 'standings', component: StandingsComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard, NotAuthGuard ]
})
export class AppRoutingModule {

}


