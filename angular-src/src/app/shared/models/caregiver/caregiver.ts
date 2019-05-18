import { Experience } from './experience';
import { User } from '../user';

export class Caregiver {
  birthDate:Date | undefined;
  rate:number;
  certificates:File[] | undefined;
  experience:Experience[];
  extraNotes:string;
  constructor() {
    //super();
  }
}
