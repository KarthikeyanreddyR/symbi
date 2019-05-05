import { Schema } from "mongoose";

export const ReviewSchema: Schema = new Schema({
    reviewerID: {
        type: String
    },
    revieweeID: {
        type: String
    },
    reviewTitle: {
        type: String
    },
    reviewDate: {
        type: Date
    },
    starRating: {
        type: Number
    },
    reviewNotes: {
        type: String
    }
});