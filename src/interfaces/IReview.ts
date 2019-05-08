import { Document } from "mongoose";

export interface IReview {
    reviewerID: string;
    revieweeID: string;
    reviewTitle: string;
    reviewDate: Date;
    starRating: number;
    reviewNotes: string | undefined;
}