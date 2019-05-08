import express from "express";
import { Request, Response } from "express";
import {userInfo} from "os";
import path from "path";
import {User} from "../../angular-src/src/app/shared/models/user";
import {IUser} from "../interfaces/IUser";
import { UserModel } from "../models/user";
import { JobListingModel } from "../models/joblisting";
import { IJobListing } from "../interfaces/IJobListing";
import { UserType } from "../interfaces/enums";

class Routes {
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

        this.router.get('/openJob', (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + '../../views/openJob.html'))
        });

        //FIXME: TEST - DELETE ONCE DONE
        /*
        this.router.get("/joblisting", (req: Request, res: Response) => {
            let jobList = new JobListingModel({
                userID: undefined,
                jobs: undefined,
                userType: UserType.PARENT
            })
            jobList.save(function(error, jList) {
                if(error) {
                    console.log("ERROR IN JOB LISTING CREATION");
                    console.log(error);
                } else {
                    console.log("SUCCESS");
                }
            });
        });
        */
    }
}

export default new Routes().router;
