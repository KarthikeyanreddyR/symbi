import { Document, Schema } from "mongoose";
import { UserType } from "./enums";
import { IJob } from "./IJob";
import { IParent } from "./IParent";

export interface IJobListing extends Document {
    userID: string;
    jobs?: IJob []
    userType: UserType;
}