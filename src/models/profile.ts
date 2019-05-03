import { Schema } from "mongoose";
import { ParentSchema } from "./parent";
import { CaregiverSchema } from "./caregiver";

export const ProfileSchema: Schema = new Schema({
    userType : {
        type: Number
    },
    profileData: {
        type : Schema.Types.Mixed
    }
})