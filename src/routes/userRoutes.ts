import express from "express";
import { Request, Response } from "express";
import path from "path";
import passport from "passport";
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

    //User validation method
    private validateAuth(req: Request, res: Response, next:any):void {
        if (req.isAuthenticated()) { 
            console.log("user is authenticated"); 
            return next(); 
        }
        console.log("user is not authenticated");
        res.redirect('/api');
      }

    private init(): void {
        /* User Routes */
        this.router.get("/users", this.validateAuth,(req: any, res: Response) => {
            UserController.GetAllUsers(req, res);
        });

        this.router.get(
            "/auth/google",
            passport.authenticate("google", { scope: ["profile", "email"] })
        );

        
        this.router.get(
            "/auth/google/callback",
            passport.authenticate("google", {
                successRedirect: "/api/auth/google/success",
                failureRedirect: "/api/auth/google/failure"
            })
        );

        this.router.get("/auth/google/success", (req: any, res: Response) => {
            console.log("inside google success");
            console.log(req.session.passport.user);
            res.send('authenticated');
        });

        this.router.get("/auth/google/failure", (req: Request, res: Response) => {
            console.log("inside google failure");
            res.send('failure');
        });



        this.router.get("/users/:userId", this.validateAuth,(req: Request, res: Response) => {
            UserController.GetUserById(req, res);
        });

        this.router.put("/users",  this.validateAuth, (req: Request, res: Response) => {
            UserController.UpdateUserById(req, res);
        });

        this.router.get("/caregivers",  this.validateAuth, (req: Request, res: Response) => {
            UserController.GetAllCaregivers(req, res);
        });

        // Register
        this.router.post("/register",  this.validateAuth, (req: Request, res: Response) => {
            UserController.RegisterUser(req, res);
        });

        // Login
        this.router.post("/login", (req: Request, res: Response) => {
            UserController.AuthenticateUser(req, res);
        });

        /* Review Routes */
        this.router.post("/review",  this.validateAuth, (req: Request, res: Response) => {
            UserController.AddReview(req, res);
        });

        this.router.get("/reviewsByUser/:userId",  this.validateAuth, (req: Request, res: Response) => {
            UserController.GetAllReviewsByUser(req, res);
        });

        this.router.get("/reviewsForUser/:userId", this.validateAuth, (req: Request, res: Response) => {
                UserController.GetAllReviewsForUser(req, res);
            }
        );

        this.router.delete("/review/:userId/:reviewId", this.validateAuth, (req: Request, res: Response) => {
                UserController.DeleteReviewForUserByReviewId(req, res);
            }
        );

        this.router.get("/", (req: Request, res: Response) => {
            RootController.ApiRootDocumentation(res);
        });
    }
}

export default new UserRoutes().router;
