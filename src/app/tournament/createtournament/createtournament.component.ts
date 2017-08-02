import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TournamentService } from '../tournament.service'

@Component({
  selector: 'app-createtournament',
  templateUrl: './createtournament.component.html',
  styleUrls: ['./createtournament.component.css']
})
export class CreatetournamentComponent implements OnInit {

  constructor(private tournamentService: TournamentService) { }

  ngOnInit() {
  }

  createTournamentOnClick(form: NgForm){
      const tour_name = form.value.tour_name;
      this.tournamentService.createTournament(tour_name);
  }
}
