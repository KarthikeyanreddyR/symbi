import { Schema, Model, model } from "mongoose";
import { JobStatus, JobType } from "../interfaces/enums"

const JobSchema: Schema = new Schema({
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