import { OnInit, AfterContentChecked } from '@angular/core'
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { AuthService } from '../auth/auth.service';

@Injectable()
export class TournamentService implements OnInit{
    token: string = null;
    tournaments = [];
    constructor(private http: HttpClient,
                private router: Router,
                private authService: AuthService)
                {

                }

    ngOnInit(){
    }

    createTournament(name: string){
        this.token = 'JWT ' + this.authService.getToken();
        const body = {
            name
        }
        this.http.post('http://localhost:8000/tournament',body,
            {
                headers: new HttpHeaders().set('Authorization', this.token)
            })
            .subscribe(
                response => {
                    console.log(response);
                }
                );
    }

    getTournament(){
        this.token = 'JWT ' + this.authService.getToken();
        return this.http.get('http://localhost:8000/tournament/list',
            {
                headers: new HttpHeaders().set('Authorization', this.token)
            }
            )
    }

}
