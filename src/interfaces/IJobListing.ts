import { Document, Schema } from "mongoose";
import { UserType } from "./enums";
import { IJob } from "./IJob";

export interface IJobListing extends Document {
    userID: string;
    jobs?: IJob []
    userType: UserType;
}