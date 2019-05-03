import { Schema } from "mongoose";
import { ExperienceSchema } from "./experience";

export const CaregiverSchema: Schema = new Schema({
    birthDate: {
        type: Date
    },
    rate: {
        type: Number
    },
    certificates: [
        {
            data: Buffer,
            contentType: String
        }
    ],
    experience: {
        type: [ExperienceSchema]
    },
    extraNotes: {
        type: [String]
    }
});
