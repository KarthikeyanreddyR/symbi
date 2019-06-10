import {Child} from './child';
import {Pet} from './pet';

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
