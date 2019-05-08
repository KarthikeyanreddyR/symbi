/**
 * Filename: IReview.ts
 * Created: 5.7.2019
 * Description: An interface for the Review class. Reviews
 * function as a way for parents to rate caregivers that they
 * have hired.
 */

 /**
  * Interface for the Review class.
  * reviwerID - The identification number of the person posting
  *             the review.
  * revieweeID - The identification number of the person the review
  *              is about.
  * reviewTitle - Title of the review.
  * reviewDate - Date the review was posted
  * starRating - The rating the reviewer is giving the reviewee
  *              minimum = 1, maximum = 5
  * reviewNotes - Optional additional notes that a reviewer can add to a 
  *               review.
  */
export interface IReview {
    reviewerID: string;
    revieweeID: string;
    reviewTitle: string;
    reviewDate: Date;
    starRating: number;
    reviewNotes: string | undefined;
}