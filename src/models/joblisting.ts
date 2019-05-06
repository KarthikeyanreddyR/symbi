import { Schema, Model, model } from "mongoose";
import { JobSchema } from "./job"
import { UserType } from "../interfaces/enums";
import { UserModel } from "./user";

export const JobListingSchema: Schema = new Schema({
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

export const JobListingModel: Model<> = model<>("JobListing", JobListingSchema);