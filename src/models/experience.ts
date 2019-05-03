import { Schema } from "mongoose";

export const ExperienceSchema: Schema = new Schema({
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
