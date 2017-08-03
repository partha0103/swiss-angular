import { Component, OnInit } from '@angular/core';

import { ManageTournamentService } from '../manage-tournament.service'

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  constructor(private manageTournamentService: ManageTournamentService) { }

  ngOnInit() {

  }

}
