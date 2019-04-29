import { Event } from './event';
import { JobStatus, JobType } from '../enums';

export class Job {
  jobId:number;
  jobName:string;
  event:Event;
  jobStatus:JobStatus;
  jobType:JobType;
  jobNotes:string;
  constructor() {

  }
}
