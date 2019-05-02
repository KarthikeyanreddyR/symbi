import { Experience } from './experience';
import { User } from '../user';

export class Caregiver {
  birthDate:Date;
  rate:number;
  certificates:File[];
  experience:Experience[];
  extraNotes:string;
  constructor() {
    //super();
  }
}
