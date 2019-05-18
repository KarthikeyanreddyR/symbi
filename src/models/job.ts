/**
 * FILE DOC
 */
import { Schema, Document, model, Model } from "mongoose";
import { JobStatus, JobType } from "../interfaces/enums"
import { IJob } from "../interfaces/IJob";

interface IJobSchema extends IJob, Document {
    createJob(cb: any): void;
}

/**
 * CLASS DOC
 */
export const JobSchema: Schema = new Schema({
    jobName: {
        type: String
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdFor: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date
    },
    jobStartTime: {
        type: Date
    },
    jobEndTime: {
        type: Date
    },
    jobStatus: {
        type: JobStatus
    },
    jobType: {
        type: JobType
    },
    jobNotes: {
        type: String
    }
});

JobSchema.statics.defaultObject = function() : IJob {
    return {
        jobName : "",
        createdAt : undefined,
        createdBy: "",
        jobEndTime: undefined,
        jobStartTime: undefined,
        jobNotes: "",
        jobType: JobType.UNKNOWN,
        jobStatus: JobStatus.UNKNOWN,
        createdFor: undefined
    }
}

JobSchema.methods.createJob = function(cb: any) {
    return this.save(cb);
}

export const JobModel: Model<IJobSchema> = model<IJobSchema>("Job", JobSchema);