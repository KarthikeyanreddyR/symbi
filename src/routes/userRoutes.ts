import express from "express";
import { Request, Response } from "express";
import path from "path";
import {IUser} from "../interfaces/IUser";
import { UserModel } from "../models/user";
import { IReview } from "../interfaces/IReview";
import { ReviewModel } from "../models/review";
import { UserType } from "../interfaces/enums";

class UserRoutes {
    public router: express.Router;

    constructor() {
        this.router = express.Router();
        this.newMethod();
    }

    private newMethod() {
        this.init();
    }

    private init(): void {
        this.router.get("/", (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + "../../views/home.html"));
        });

        this.router.get("/users", (req: Request, res: Response) => {
            UserModel.find({}, (err: any, docs:IUser[]) => {
                if(err) {
                    console.log(err);
                    res.json({
                        success: false,
                        msg: "Something went wrong!!!"
                    })
                } else {
                    res.json({
                        success: true,
                        data: docs
                    })
                }
            })
        });

        this.router.get('/caregivers', (req: Request, res: Response) => {
            let _logged_in_user_email: string = req.query.authEmail;
            console.log(_logged_in_user_email);
            UserModel.find({}).where('email').ne(_logged_in_user_email).exec((err: any, docs:IUser[]) => {
                if(err) {
                    console.log(err);
                    res.json({
                        success: false,
                        msg: "Something went wrong!!!"
                    })
                } else {
                    docs.forEach(doc => {
                        doc.profiles.forEach((profile, idx, arr) => {
                            if(profile.userType == UserType.PARENT)
                                arr.splice(idx, 1);
                        });
                    });
                    res.json({
                        success: true,
                        data: docs
                    })
                }
            })
        });

        this.router.get('/caregivers/:email', (req: Request, res: Response) => {
            let _email: string = req.params.email;
            UserModel.find({}).where('email').equals(_email).exec((err: any, docs:IUser[]) => {
                if(err) {
                    console.log(err);
                    res.json({
                        success: false,
                        msg: "Something went wrong!!!"
                    })
                } else {
                    docs.forEach(doc => {
                        doc.profiles.forEach((profile, idx, arr) => {
                            if(profile.userType == UserType.PARENT)
                                arr.splice(idx, 1);
                        });
                    });
                    res.json({
                        success: true,
                        data: docs
                    })
                }
            })
        });

        this.router.get("/register", (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + "../../views/register.html"));
        });

        this.router.post("/register", (req: Request, res: Response) => {
            let _user: IUser = UserModel.schema.statics.defaultObject();

            _user.firstName = req.body.firstName;
            _user.lastName = req.body.lastName;
            _user.email = req.body.email;
            _user.password = req.body.password;

            try {
                new UserModel(_user).registerUser((err: any, user: IUser) => {
                    if (err) { console.log(err); }
                    console.log("registered user");
                    res.json({
                        success: true,
                        msg: "Registered user",
                        data: user,
                    });
                });
            } catch (error) {
                res.json({
                    success: false,
                    msg: "Failed to register",
                });
            }
        });

        this.router.get("/login", ((req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + "../../views/login.html"));
        }));

        this.router.post("/login", (req: Request, res: Response) => {
            UserModel.findOne({ email: req.body.email }, (err: any, user: IUser) => {
                if (err) {
                    res.json(err);
                } else if (user) {
                    if(user.password === req.body.password) {
                        res.json({
                            success: true,
                            msg: "Login successful",
                            data: user,
                        });
                    } else {
                        res.json({
                            success: false,
                            msg: "Invalid password"
                        });
                    }
                } else {
                    res.json({
                        success: false,
                        msg: "Invalid email"
                    });
                }
            });
        });

        // Profile
        this.router.get("/profile", (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + "../../views/profile.html"));
        });

        this.router.get("/caregiverprofile", (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + "../../views/caregiverprofile.html"));
        });

        this.router.get("/reviews", (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + "../../views/reviews.html"));
        });

        this.router.post("/review", (req: Request, res: Response) => {
            let review: IReview = {
                reviewerID: "",
                revieweeID: "",
                reviewDate: new Date(),
                reviewTitle: req.body.reviewTitle,
                starRating: req.body.starRating,
                reviewNotes: req.body.reviewNotes
            }

            UserModel.findOne({}).exec().then((user:any) => {
                review.reviewerID = user['_id'];
                review.revieweeID = user['_id'];

                new ReviewModel(review).addReview((err: any, doc:IReview) => {
                    if(err) {
                        res.json({
                            success: false,
                            msg: 'error occurred'
                        });
                    } else {
                        res.json({
                            success: true,
                            msg: 'review posted',
                            data: doc
                        })
                    }
                })
            }, (err: any) => {
                console.log(err);
                res.json({
                    success: false,
                    msg: 'error occurred'
                })
            })
        });

    }
}

export default new UserRoutes().router;
