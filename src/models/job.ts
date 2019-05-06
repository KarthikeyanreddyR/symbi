/**
 * FILE DOC
 */
import { Schema } from "mongoose";
import { JobStatus, JobType } from "../interfaces/enums"
import { EventSchema } from "./event";

/**
 * CLASS DOC
 */
export const JobSchema: Schema = new Schema({
    jobName: {
        type: String
    },
    jobID: {
        type: String
    },
    jobTime: {
        type: EventSchema
    },
    jobStatus: {
        type: JobStatus
    },
    jobType: {
        type: JobType
    },
    jobNotes: {
        type: [String]
    }
});