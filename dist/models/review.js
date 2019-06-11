"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Filename: review.ts
 * Created: 5.7.2019
 * Description: Model-Schema for the Review class
 */
var mongoose_1 = require("mongoose");
/**
 * Schema for the Review class.
 * reviewerID: unique identification for user writing the review
 * revieweeID: unique identification for user that the review is about
 * reviewTitle: title of the review
 * reviewDate: date of the review
 * starRating: review rating min: 1, max: 5
 * reviewNotes: additional optional notes that can be added to a review
 */
exports.ReviewSchema = new mongoose_1.Schema({
    reviewerID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    revieweeID: {
        type: mongoose_1.Schema.Types.ObjectId,
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
exports.ReviewSchema.methods.addReview = function (cb) {
    this.save(cb);
};
//Creation and export of the Review schema as a Review Model
exports.ReviewModel = mongoose_1.model('Review', exports.ReviewSchema);
