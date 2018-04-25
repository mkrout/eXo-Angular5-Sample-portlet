import { ScvToJsonService } from './../../services/scvToJson.service';
import { FileUploadComponent } from './../uploadFileComponent/file-upload.component';
import { Component, OnInit } from "@angular/core";
import {MatTableDataSource} from '@angular/material';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-user-table',
  styleUrls: ['./userTable.component.css'],
  templateUrl: './userTable.component.html'
})

export class UserTableComponent  {
  constructor() {
  }
  displayedColumns = ['userName', 'firstName', 'lastName', 'password', 'email', 'groups', 'spaces'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
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
  },
  {
    userName: "amber",
    firstName: "Amber",
    lastName: "Jules",
    password: "amber",
    email: "amber@exo.com",
    groups: "",
    spaces: "nps_space"
  },
  {
    userName: "andrew",
    firstName: "Andrew",
    lastName: "Potter",
    password: "andrew",
    email: "andrew@exo.com",
    groups: "",
    spaces: "nps_space"
  },
  {
    userName: "andy",
    firstName: "Andy",
    lastName: "Fox",
    password: "andy",
    email: "andy@exo.com",
    groups: "",
    spaces: "nps_space"
  },
  {
    userName: "henry",
    firstName: "Henry",
    lastName: "Smith",
    password: "henry",
    email: "henry@exo.com",
    groups: "",
    spaces: "nps_space"
  },
  {
    userName: "jim",
    firstName: "Jim",
    lastName: "Fisher",
    password: "jim",
    email: "jim@exo.com",
    groups: "",
    spaces: "nps_space"
  },
  {
    userName: "john",
    firstName: "John",
    lastName: "Harold",
    password: "john",
    email: "john@exo.com",
    groups: "",
    spaces: "nps_space"
  },
  {
    userName: "julian",
    firstName: "Julian",
    lastName: "Brown",
    password: "julian",
    email: "julian@exo.com",
    groups: "",
    spaces: "nps_space"
  },
  {
    userName: "mark",
    firstName: "Mark",
    lastName: "Anthony",
    password: "mark",
    email: "mark@exo.com",
    groups: "",
    spaces: "nps_space"
  },
  {
    userName: "mary",
    firstName: "Mary",
    lastName: "Williams",
    password: "mary",
    email: "mary@exo.com",
    groups: "",
    spaces: "nps_space"
  },
  {
    userName: "michael",
    firstName: "Michael",
    lastName: "Andrew",
    password: "michael",
    email: "michael@exo.com",
    groups: "",
    spaces: "nps_space"
  },
  {
    userName: "robert",
    firstName: "Robert",
    lastName: "Bruce",
    password: "robert",
    email: "robert@exo.com",
    groups: "",
    spaces: "nps_space"
  },
  {
    userName: "sam",
    firstName: "Sam",
    lastName: "Harrison",
    password: "sam",
    email: "sam@exo.com",
    groups: "",
    spaces: "nps_space"
  },
  {
    userName: "sandy",
    firstName: "Sandy",
    lastName: "Anderson",
    password: "sandy",
    email: "sandy@exo.com",
    groups: "",
    spaces: "nps_space"
  },
  {
    userName: "tracy",
    firstName: "Tracy",
    lastName: "Cooper",
    password: "tracy",
    email: "tracy@exo.com",
    groups: "",
    spaces: "nps_space"
  },
  {
    userName: "nps_bot",
    firstName: "NPS",
    lastName: "Bot",
    password: "nps_bot",
    email: "nps_bot@exo.com",
    groups: "",
    spaces: ""
  }
];

