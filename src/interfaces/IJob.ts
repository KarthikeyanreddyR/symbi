/**
 * Filename: IJob.ts
 * Created: 5.6.2019
 * Description: Interface for the Job schema.
 *              This interface mirrors the job.ts Schema
 *              All fields in a Job are required for a Job to
 *              exist, a Job is then collected under JobListing
 */
import { JobType, JobStatus } from "./enums";

export interface IJob {
  jobName: string;
  createdBy: string;
  createdAt: string;
  jobStartTime: string;
  jobEndTime: string;
  jobStatus: JobStatus;
  jobType: JobType;
  jobNotes: string;
  createdFor: string | undefined;
}
