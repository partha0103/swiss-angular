import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component'
import { SignupComponent } from './auth/signup/signup.component'
import { AuthGuard } from './auth/authguard.service'
import { TournamentComponent } from './tournament/tournament.component'

const routes: Routes = [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', component: TournamentComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class AppRoutingModule {

}

