import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';


@Injectable()
export class  ManageTournamentService{
    token: string;
    players = [];
    tournament_status: string;
    winner: string;
    round: number;
    constructor( private authService: AuthService,
                 private http: HttpClient,
                 private router: Router){}

    getTournamentDetail(id: number){
        this.token = 'JWT ' + this.authService.getToken();
        this.http.get('http://localhost:8000/tournament/all/:id',
            {
                headers: new HttpHeaders().set('Authorization', this.token)
            })
            .subscribe(
                (response) => {
                    this.players = response['players'];
                    this.tournament_status = response['status'];
                    this.winner = response['winner'];
                    this.round = response['round'];
                }
                )
    }
}
