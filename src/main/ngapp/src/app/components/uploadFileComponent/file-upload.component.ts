import { ScvToJsonService } from '../../services/scvToJson.service';
import { Component, OnInit } from '@angular/core';
import { DataSource} from '@angular/cdk/collections';
import {User} from '../../model/user.model';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html'
})

export class FileUploadComponent {
  constructor(private scvToJsonService: ScvToJsonService) {}
  selectedFile = null;
  users = null;
  onFileSelected(event) {
    console.log(event.target.files[0]);
    this.selectedFile = event.target.files[0];
    this.users = this.scvToJsonService.convertFile(this.selectedFile);
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
  }
];

