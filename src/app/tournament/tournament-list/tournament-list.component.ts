import { Component, OnInit } from '@angular/core';

import { TournamentService } from '../tournament.service'

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})
export class TournamentListComponent implements OnInit {
  tournaments: any = [
    ];
  constructor(private tournamentService: TournamentService) {

  }

  ngOnInit() {
  }

  getTournament(){
      this.tournaments = this.tournamentService.showTournament();
  }
}
