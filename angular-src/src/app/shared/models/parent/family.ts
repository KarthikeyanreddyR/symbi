import {Child} from './Child';
import {Pet} from './Pet';

export class Family {
  children:Child[];
  pets:Pet[];
  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.children = [];
    this.pets = [];
  }
}
