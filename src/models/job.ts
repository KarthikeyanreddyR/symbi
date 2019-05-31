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
        type: String
    },
    jobStartTime: {
        type: String
    },
    jobEndTime: {
        type: String
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
        createdAt : "",
        createdBy: "",
        jobEndTime: "",
        jobStartTime: "",
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