import { Document, Schema } from "mongoose";
import { UserType } from "./enums";
import { IJob } from "./IJob";

export interface IJobListing {
    userID?: string;
    jobs?: IJob []
    userType: UserType;
}