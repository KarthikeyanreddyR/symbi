import { Schema, Model, model, Document } from "mongoose";
import { JobSchema } from "./job"
import { UserType } from "../interfaces/enums";
import { IJobListing } from "../interfaces/IJobListing";

interface IJobListingSchema extends IJobListing, Document {
    createJobListing(cb: any): void;
}

const JobListingSchema: Schema = new Schema({
    userID: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    jobs: {
        type: [JobSchema]
    },
    userType: {
        type: UserType
    }
});

/**
 * Implementation testing method
 */
JobListingSchema.methods.createJobListing = function(cb: any) {
    return this.save(cb);
}

JobListingSchema.methods.getAll = function(cb: any) {
    return new JobListingModel(this).save(cb);
}


export const JobListingModel: Model<IJobListingSchema> = model<IJobListingSchema>("JobListing", JobListingSchema);
