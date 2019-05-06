import { Document } from "mongoose";
import { UserType, JobType, JobStatus } from "./enums";
import { ICaregiver } from "./ICaregiver";
import { IParent } from "./IParent";

export interface IJob extends Document {
    jobName?: string;
    jobID?: string;
    //TODO jobTime?: IEvent;
    jobStatus?: JobStatus;
    jobType: JobType;
    jobNotes: string [];
}