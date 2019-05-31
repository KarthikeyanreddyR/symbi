/**
 * Filename: review.ts
 * Created: 5.7.2019
 * Description: Model-Schema for the Review class
 */
import { Schema, Document, Model, model } from "mongoose";
import { IReview } from "../interfaces/IReview";

//Only add IReview - Document components we don't need
interface IReviewSchema extends IReview, Document {
    addReview(cb: any): void;
}

/**
 * Schema for the Review class.
 * reviewerID: unique identification for user writing the review
 * revieweeID: unique identification for user that the review is about
 * reviewTitle: title of the review
 * reviewDate: date of the review
 * starRating: review rating min: 1, max: 5
 * reviewNotes: additional optional notes that can be added to a review
 */
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
        type: String
    },
    starRating: {
        type: Number
    },
    reviewNotes: {
        type: String
    }
});

/**
 * Add review method
 */
ReviewSchema.methods.addReview = function(cb: any): void {
    this.save(cb);
}

//Creation and export of the Review schema as a Review Model
export const ReviewModel: Model<IReviewSchema> = model<IReviewSchema>('Review', ReviewSchema);