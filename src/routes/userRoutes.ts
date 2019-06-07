import express from "express";
import { Request, Response } from "express";
import path from "path";
import passport from 'passport';
import { IUser } from "../interfaces/IUser";
import { UserModel } from "../models/user";
import { IReview } from "../interfaces/IReview";
import { ReviewModel } from "../models/review";
import { UserType } from "../interfaces/enums";
import { UserController } from "../controllers/usersController";
import { RootController } from "../controllers/rootController";

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

        /* User Routes */
        this.router.get("/users", (req: Request, res: Response) => {
            UserController.GetAllUsers(req, res);
        });

        this.router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

        this.router.get('/auth/google/callback', passport.authenticate('google'), (req: Request, res: Response) => {
            console.log('inside google callback');
        });

        this.router.get("/users/:userId", (req: Request, res: Response) => {
            UserController.GetUserById(req, res);
        });

        this.router.put("/users", (req: Request, res: Response) => {
            UserController.UpdateUserById(req, res);
        });

        this.router.get('/caregivers', (req: Request, res: Response) => {
            UserController.GetAllCaregivers(req, res);
        });

        // Register
        this.router.post("/register", (req: Request, res: Response) => {
            UserController.RegisterUser(req, res);
        });

        // Login
        this.router.post("/login", (req: Request, res: Response) => {
            UserController.AuthenticateUser(req, res);
        });

        /* Review Routes */
        this.router.post("/review", (req: Request, res: Response) => {
            UserController.AddReview(req, res);
        });

        this.router.get("/reviewsByUser/:userId", (req: Request, res: Response) => {
            UserController.GetAllReviewsByUser(req, res);
        });

        this.router.get("/reviewsForUser/:userId", (req: Request, res: Response) => {
            UserController.GetAllReviewsForUser(req, res);
        });

        this.router.delete("/review/:userId/:reviewId", (req: Request, res: Response) => {
            UserController.DeleteReviewForUserByReviewId(req, res);
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

        this.router.get("/", (req: Request, res: Response) => {
            RootController.ApiRootDocumentation(res);
        });

    }
}

export default new UserRoutes().router;
