import { Document } from "mongoose";
import { UserType } from "./enums";
import { ICaregiver } from "./ICaregiver";
import { IParent } from "./IParent";

export interface IJobListing extends Document {
    userID?: string;
    //TODO: jobs?:
    userType?: UserType;
}