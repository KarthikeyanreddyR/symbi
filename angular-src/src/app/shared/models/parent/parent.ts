import { User } from '../user';
import { Family } from './family';

export class Parent {
  family:Family;
  houseRules:string[];
  constructor() {
    //super();
    this.init();
  }

  private init() {
    this.family = new Family();
    this.houseRules = [];
  }
}
