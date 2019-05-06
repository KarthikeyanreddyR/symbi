/**
 * Filename: IJob.ts
 * Created: 5.6.2019
 * Description: Interface for the Job schema.
 *              This interface mirrors the job.ts Schema
 *              All fields in a Job are required for a Job to
 *              exist, a Job is then collected under JobListing
 */
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