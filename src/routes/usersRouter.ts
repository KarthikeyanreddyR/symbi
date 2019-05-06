import express from "express";
import { Request, Response } from "express";
import {userInfo} from "os";
import path from "path";
import {User} from "../../angular-src/src/app/shared/models/user";
import { UserModel } from "../models/user";

class Routes {
    public router: express.Router;

    constructor() {
        this.router = express.Router();
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
            const newUser = new UserModel();
            newUser.firstName = req.body.firstName;
            newUser.lastName = req.body.lastName;
            newUser.email = req.body.email;
            newUser.password = req.body.password;

            try {
                newUser.save((err, user) => {
                    if (err) { console.log(err); }
                    console.log("registered user");
                    res.json({
                        success: true,
                        // tslint:disable-next-line:object-literal-sort-keys
                        msg: "Registered user",
                        data: user,
                    });
                });

            } catch (error) {
                res.json({
                    success: false,
                    // tslint:disable-next-line:object-literal-sort-keys
                    msg: "Failed to register",
                });
            }
        });

        this.router.get("/login", ((req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + "../../views/login.html"));
        }));

/*        this.router.post("/login", (req: Request, res: Response) => {
            UserModel.findOne({email: req.params.email,
                                        password: req.params.password},
                                        (err: any, user: UserModel) => {
                if (err) { res.json(err); } else if (user) {res.send(user) else {res.status(500, "User not Found")}
            });
        });*/

        // Authenticate
        this.router.post("/auth", (req: Request, res: Response) => {
            res.send("Auth");
        });

        // Profile
        this.router.get("/profile", (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + "../../views/profile.html"));
        });
    }
}

export default new Routes().router;
