import { Document, Schema } from "mongoose";
import { UserType } from "./enums";
import { IJob } from "./IJob";
import { IParent } from "./IParent";

export interface IJobListing extends Document {
    userID?: Schema.Types.ObjectId, ref: 'User';
    jobs?: IJob []
    userType?: UserType;
}