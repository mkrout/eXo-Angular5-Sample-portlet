export class User {

    userName: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    groups: string;
    spaces: string;


    constructor( userName: string, firstName: string, lastName: string, password: string, email: string, groups: string, spaces: string) {
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.groups = groups;
    this.spaces = spaces;
    }
}
