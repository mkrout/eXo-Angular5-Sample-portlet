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

  public getElements() {
    return this.elements;
  }

  public setElements(elements: any) {
    this.elements = elements;
  }
  convertFile(input): any {
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result;
     // console.log('CSV: ', text.substring(0, 100) + '...');
    };
    reader.readAsText(input);
    reader.onload = (e) => {
      const csv: string = reader.result;
      const allTextLines = csv.split(/\r|\n|\r/);
      const headers = allTextLines[0].split(',');
      const lines = [];
      for (let i = 1; i < allTextLines.length; i++) {
      // split content based on comma
      const data = allTextLines[i].split(',');
      if (data.length === headers.length) {
      const user = new User(data[0], data[1], data[2], data[3], data[4], data[5], data[6]);

      lines.push(user);
      }
      }

      this.setElements(lines);
      return lines;
  };
}

}
