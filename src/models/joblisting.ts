import { Schema, Model, model } from "mongoose";
import { JobSchema } from "./job"
import { UserType } from "../interfaces/enums";

export const JobListingSchema: Schema = new Schema({
    userID: {
        type: String
    },
    jobs: {
        type: [JobSchema]
    },
    userType: {
        type: UserType
    }
});