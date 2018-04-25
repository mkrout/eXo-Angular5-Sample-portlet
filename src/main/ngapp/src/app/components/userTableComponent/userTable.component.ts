import { Component, OnInit } from "@angular/core";
import {MatTableDataSource} from '@angular/material';
import { User } from '../../model/user.model';
import { ScvToJsonService } from '../../services/scvToJson.service';

@Component({
  selector: 'app-user-table',
  styleUrls: ['./userTable.component.css'],
  templateUrl: './userTable.component.html'
})

export class UserTableComponent  {
  constructor(private scvToJsonService: ScvToJsonService) {
  }
  users = this.scvToJsonService.lines;
}


const ELEMENT_DATA: User[] = [
  {
    userName: "adlam",
    firstName: "Adam",
    lastName: "Holmes",
    password: "adam",
    email: "adam@exo.com",
    groups: "",
    spaces: "nps_space"
  },
  {
    userName: "amanda",
    firstName: "Amanda",
    lastName: "Jefferson",
    'password': "amanda",
    email: "amanda@exo.com",
    groups: "",
    spaces: "nps_space"
  }
];

