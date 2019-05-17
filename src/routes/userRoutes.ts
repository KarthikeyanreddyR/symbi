import express from "express";
import { Request, Response } from "express";
import path from "path";
import {IUser} from "../interfaces/IUser";
import { UserModel } from "../models/user";
import { IReview } from "../interfaces/IReview";
import { ReviewModel } from "../models/review";
import { UserType } from "../interfaces/enums";
import { UserController } from "../controllers/usersController";

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
        
        this.router.get("/users", (req: Request, res: Response) => {
            UserController.GetAllUsers(req, res);
        });

        this.router.get("/users/:userId", (req: Request, res: Response) => {
            UserController.GetUserById(req, res);
        });

        this.router.put("/users", (req: Request, res: Response) => {
            UserController.UpdateUserById(req, res);
        });

        this.router.post("/register", (req: Request, res: Response) => {
            UserController.RegisterUser(req, res);
        });
        
        this.router.post("/login", (req: Request, res: Response) => {
            UserController.AuthenticateUser(req, res);
        });

        this.router.post("/review", (req: Request, res: Response) => {
            UserController.AddReview(req, res);
        });

        this.router.get("/reviewsByUser/:userId", (req: Request, res: Response) => {
            UserController.GetAllReviewsByUser(req, res);
        });

        this.router.get("/reviewsForUser/:userId", (req: Request, res: Response) => {
            UserController.GetAllReviewsForUser(req, res);
        });

        /**
         * Temp routes - need to be modified to angular routes
         */
        this.router.get("/", (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + "../../views/home.html"));
        });

        this.router.get("/register", (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + "../../views/register.html"));
        });

        this.router.get("/login", ((req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + "../../views/login.html"));
        }));

        this.router.get("/profile", (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + "../../views/profile.html"));
        });

        this.router.get("/caregiverprofile", (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + "../../views/caregiverprofile.html"));
        });

        this.router.get("/reviews", (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + "../../views/reviews.html"));
        });

    }
}

export default new UserRoutes().router;
