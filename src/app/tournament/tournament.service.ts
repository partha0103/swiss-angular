import { OnInit } from '@angular/core'
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
        this.http.post('http://localhost:8000/tournament',
            {
                headers: new HttpHeaders().set('Authorization', this.token)
            })
            .subscribe(
                response => {console.log("Hello")}
                );
    }

    showTournament(){
        this.token = 'JWT ' + this.authService.getToken();
        this.http.get('http://localhost:8000/tournament',
            {
                headers: new HttpHeaders().set('Authorization', this.token)
            }
            )
            .subscribe(
                (response: any[]) => {
                    console.log(response);
                    return response;
                }
                )
    }
}
