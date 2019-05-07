import { Schema } from "mongoose";

export const ReviewSchema: Schema = new Schema({
    reviewerID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    revieweeID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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