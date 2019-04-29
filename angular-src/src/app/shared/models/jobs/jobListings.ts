import { UserType } from '../enums';
import { Job } from './job';

export class JobListings {
  userId:string;
  userType:UserType;
  jobs:Job[];
  constructor() {

  }
}
