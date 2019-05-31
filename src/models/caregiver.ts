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
        type: String
    },
    endDate: {
        type: String
    }
});

export const CaregiverSchema: Schema = new Schema({
    birthDate: {
        type: String
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
