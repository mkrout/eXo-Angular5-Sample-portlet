import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

/**
 * @description
 * @class
 */
@Injectable()
export class ScvToJsonService {
  private elements: any;

   constructor() {}

  convertFile(input): any {
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result;
     // console.log('CSV: ', text.substring(0, 100) + '...');
    };
    reader.readAsText(input);
    let lines: User[] = [];
    reader.onload = (e) => {
      const csv: string = reader.result;
      const allTextLines = csv.split(/\r|\n|\r/);
      const headers = allTextLines[0].split(',');
      for (let i = 1; i < allTextLines.length; i++) {
      // split content based on comma
      const data = allTextLines[i].split(',');
      if (data.length === headers.length) {
     // const user = new User(data[0], data[1], data[2], data[3], data[4], data[5], data[6]);
     const user = {
      userName: data[0],
      firstName: data[1],
      lastName: data[2],
      password: data[3],
      email: data[4],
      groups: data[5],
      spaces: data[6]
    };
      lines.push(user);
      }
      }
  };
  return lines;
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
  }
];



