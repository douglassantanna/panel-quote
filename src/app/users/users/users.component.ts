import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ValidatorFn, FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  leagueForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  logToConsole(object: any) {
    console.log(object);
  }

  ngOnInit() {
    this.leagueForm = this.fb.group({
      league_details: this.fb.group({
        name: "",
        founder: ""
      }),
      teams: this.fb.array([this.teams])
    });
  }

  get teams(): FormGroup {
    return this.fb.group({
      team_name: "",
      players: this.fb.array([this.players])
    });

  }
  get players(): FormGroup {
    return this.fb.group({
      player_name: "",
      player_number: ""
    });
  }

  addTeam() {
    (this.leagueForm.get("teams") as FormArray).push(this.teams);
  }

  deleteTeam(index: any) {
    (this.leagueForm.get("teams") as FormArray).removeAt(index);
  }

  addPlayer(team: any) {
    team.get("players").push(this.players);
  }

  deletePlayer(team: any, index: any) {
    team.get("players").removeAt(index);
  }
}
