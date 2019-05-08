import { Schema, Document, Model, model } from "mongoose";
import { IReview } from "../interfaces/IReview";

interface IReviewSchema extends IReview, Document {
    addReview(cb: any): void;
}

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

ReviewSchema.methods.addReview = function(cb: any): void {
    this.save(cb);
}

export const ReviewModel: Model<IReviewSchema> = model<IReviewSchema>('Review', ReviewSchema);