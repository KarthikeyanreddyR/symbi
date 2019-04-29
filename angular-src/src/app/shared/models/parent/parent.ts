import { User } from './user';
import { Family } from './family';

export class Parent extends User {
  family:Family;
  houseRules:string[];
  constructor() {
    super();
  }
}
