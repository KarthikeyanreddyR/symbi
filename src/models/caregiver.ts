import { Schema } from "mongoose";

const ExperienceSchema: Schema = new Schema({
    jobPlace: {
        type: String
    },
    jobDesignation: {
        type: String
    },
    jobDescription: {
        type: String
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    }
});

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
