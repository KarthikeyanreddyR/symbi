import express, { NextFunction } from "express";
import { Request, Response } from "express";
import path from "path";
import passport from "passport";
import { UserController } from "../controllers/usersController";
import { RootController } from "../controllers/rootController";

export let redirectRoutes = {
    google : {
        successRedirect: "/api/auth/google/success",
        failureRedirect: "/api/auth/google/failure"
    },
    local: {
        successRedirect: '/api/auth/local/success',
        failureRedirect: '/api/auth/local/failure'
    }
}

class UserRoutes {
    public router: express.Router;

    constructor() {
        this.router = express.Router();
        this.init();
    }

    // Redirect URL Function
    private getRedirectUrl(req: Request): string {
        let _originUrl = req.get('origin');
        let _host = req.get('host');
        if(_originUrl) {
            return _originUrl;
        } else if (_host && _host.includes('localhost')) {
            return 'http://localhost:3000';
        } else {
            return req.protocol + '://' + _host;
        }
    }

    //User validation method
    private validateAuth(req: Request, res: Response, next: NextFunction): void {
        if (req.isAuthenticated()) {
            return next();
        }
        res.status(404).json({
            success: false,
            msg: 'Unauthorized access. please Login'
        });
        //return next();
    }

    private init(): void {

        // Google OAuth route
        this.router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

        // Google OAuth redirect URL - Google calls this route after sign-in
        this.router.get("/auth/google/callback", passport.authenticate("google", redirectRoutes.google));

        // Google OAuth success route - called when sign-in is OK
        this.router.get("/auth/google/success", (req: Request, res: Response) => {
            res.redirect(`${this.getRedirectUrl(req)}/#/landing`);
        });

        // Google OAuth failure route - called when sign-in is NOT-OK
        this.router.get("/auth/google/failure", (req: Request, res: Response) => {
            res.redirect(`${this.getRedirectUrl(req)}/#/unauthorized`);
        });

        // Register
        this.router.post("/register", (req: Request, res: Response) => {
            UserController.RegisterUser(req, res);
        });

        this.router.delete("/users/:email", (req: Request, res: Response) => {
            UserController.DeleteUserByEmail(req, res);
        });

        //Logout
        this.router.get("/logout", (req: Request, res: Response) => {
            req.logOut();
            req.session!.destroy(function(err) {
                if(err) {
                    return res.status(500).json({
                        success: true,
                        error: err
                    });
                } else {
                    return res.status(200).json({
                        success: true,
                        msg: "User loggout successfully"
                    }); 
                }
            });    
            delete req.session;       
        });
        
        // Login
        this.router.post("/login", passport.authenticate('local', redirectRoutes.local));
        
        this.router.get("/auth/local/success", (req: Request, res: Response) => {
            res.status(200).json({
                success: true,
                data: req.user
            })
        });

        this.router.get("/auth/local/failure", (req: Request, res: Response) => {
            res.status(404).json({
                success: false,
                msg: 'Unauthorized. login again'
            })
        });

        this.router.get('/user/currentUser', this.validateAuth, (req: Request, res: Response) => {
            res.status(200).json({
                success: true,
                data: req.user
            });
            
        });

        /**
         * THIS ROUTE IS ONLY FOR MOCHA TESTING. 
         */
        this.router.get("/test/users", (req: any, res: Response) => {
            UserController.GetAllUsers(req, res);
        });

        /* User Routes */
        this.router.get("/users", this.validateAuth, (req: any, res: Response) => {
            UserController.GetAllUsers(req, res);
        });

        this.router.get("/users/:userId", this.validateAuth, (req: Request, res: Response) => {
            UserController.GetUserById(req, res);
        });

        this.router.put("/users", this.validateAuth, (req: Request, res: Response) => {
            UserController.UpdateUserById(req, res);
        });

        this.router.get("/caregivers", this.validateAuth, (req: Request, res: Response) => {
            UserController.GetAllCaregivers(req, res);
        });

        /* Review Routes */
        this.router.post("/review", this.validateAuth, (req: Request, res: Response) => {
            UserController.AddReview(req, res);
        });

        this.router.get("/reviewsByUser/:userId", this.validateAuth, (req: Request, res: Response) => {
            UserController.GetAllReviewsByUser(req, res);
        });

        this.router.get("/reviewsForUser/:userId", this.validateAuth, (req: Request, res: Response) => {
            UserController.GetAllReviewsForUser(req, res);
        });

        this.router.delete("/review/:userId/:reviewId", this.validateAuth, (req: Request, res: Response) => {
            UserController.DeleteReviewForUserByReviewId(req, res);
        });

        this.router.get("/", (req: Request, res: Response) => {
            RootController.ApiRootDocumentation(res);
        });
    }
}

export default new UserRoutes().router;
