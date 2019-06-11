"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ExperienceSchema = new mongoose_1.Schema({
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
exports.CaregiverSchema = new mongoose_1.Schema({
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
