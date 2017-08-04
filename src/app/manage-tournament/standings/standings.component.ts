import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ManageTournamentService } from '../manage-tournament.service'

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit, AfterViewInit {
  standings: any = [];

  constructor(private manageTournamentService: ManageTournamentService) { }

  ngOnInit() {

  }

  ngAfterViewInit(){

  }
}
