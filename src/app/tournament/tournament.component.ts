import { Component, OnInit } from '@angular/core';

import { TournamentService } from './tournament.service'

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  constructor( private tournamentService: TournamentService) { }

  ngOnInit() {

  }

}
