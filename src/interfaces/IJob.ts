import { Document } from "mongoose";
import { JobType, JobStatus } from "./enums";
import { IEvent } from "./IEvent";

export interface IJob extends Document {
    jobName: string;
    jobID: string;
    jobTime: IEvent;
    jobStatus: JobStatus;
    jobType: JobType;
    jobNotes: string [];
}