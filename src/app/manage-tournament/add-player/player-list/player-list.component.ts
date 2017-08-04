import { Component, OnInit } from '@angular/core';

import { ManageTournamentService } from '../../manage-tournament.service'

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  constructor(private manageTournamentSer) { }

  ngOnInit() {
  }

}
