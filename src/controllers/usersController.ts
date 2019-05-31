import { Request, Response } from "express";
import { UserModel } from "../models/user";
import { IUser } from "../interfaces/IUser";
import { IReview } from "../interfaces/IReview";
import { ReviewModel } from "../models/review";

export class UserController {
    constructor() {

    }

    public static AuthenticateUser(req: Request, res: Response) {
        UserModel.findOne({ email: req.body.email }, (err: any, user: IUser) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            } else if (user) {
                if (user.password === req.body.password) {
                    res.status(200).json({
                        success: true,
                        data: user,
                    });
                } else {
                    res.status(200).json({
                        success: false,
                        msg: "Invalid password"
                    });
                }
            } else {
                res.status(200).json({
                    success: false,
                    msg: "Invalid email"
                });
            }
        });
    }

    public static RegisterUser(req: Request, res: Response) {
        let _user: IUser = UserModel.schema.statics.defaultObject();

        _user.firstName = req.body.name;
        _user.email = req.body.email;
        _user.password = req.body.password;

        try {
            new UserModel(_user).registerUser((err: any, user: IUser) => {
                if (err) {
                    res.status(500).json({
                        success: false,
                        error: err
                    });
                } else {
                    res.status(200).json({
                        success: true,
                        data: user,
                    });
                }
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            });
        }
    }

    public static GetAllUsers(req: Request, res: Response) {
        UserModel.find({}).exec((err: any, docs: IUser[]) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: docs
                });
            }
        });
    }

    public static GetUserById(req: Request, res: Response) {
        UserModel.findById(req.params.userId).exec((err: any, doc: IUser) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: doc
                });
            }
        });
    }

    public static UpdateUserById(req: Request, res: Response) {
        UserModel.findByIdAndUpdate(req.body._id, req.body, { new: true }).exec((err: any, doc: IUser) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: doc
                });
            }
        });
    }

    /**
     * User Reviews
     */

    public static AddReview(req: Request, res: Response) {
        let review: IReview = {
            reviewerID: req.body.reviewerID,
            revieweeID: req.body.revieweeID,
            reviewDate: req.body.reviewDate,
            reviewTitle: req.body.reviewTitle,
            starRating: req.body.starRating,
            reviewNotes: req.body.reviewNotes
        }

        new ReviewModel(review).addReview((err: any, doc: IReview) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: doc
                });
            }
        })
    }

    public static GetAllReviewsByUser(req: Request, res: Response) {
        ReviewModel.find().where('reviewerID').equals(req.params.userId).exec((err: any, docs: IReview[]) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: docs
                });
            }
        })
    }

    public static GetAllReviewsForUser(req: Request, res: Response) {
        ReviewModel.find().where('revieweeID').equals(req.params.userId).exec((err: any, docs: IReview[]) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: docs
                });
            }
        })
    }

    public static DeleteReviewForUserByReviewId(req: Request, res: Response) {
        let _userId: string = req.params.userId;
        let _reviewId: string = req.params.reviewId;

        // validate userId
        UserModel.findById(_userId).count().exec((err: any, count: number) => {
            if (count > 0) {
                // find by _id and delete it.
                ReviewModel.findByIdAndDelete(_reviewId).where('reviewerID').equals(_userId).exec((err: any, doc: IReview) => {
                    if (err) {
                        res.status(500).json({
                            success: false,
                            error: err
                        });
                    } else {
                        if (doc) {
                            res.status(200).json({
                                success: true,
                                data: doc,
                                msg: "deleted review"
                            });
                        } else {
                            res.status(200).json({
                                success: false,
                                msg: "No review with given review id"
                            })
                        }
                    }
                });

            } else {
                // no user with id
                res.status(200).json({
                    success: false,
                    msg: "No user with given user id"
                });
            }
        });
    }
}