import express from "express";
import { Request, Response } from "express";
import { User, UserRepository, UserModel } from '../models/user';
import path from 'path';


class Routes {
    public router: express.Router;

    constructor() {
        this.router = express.Router();
        this.init();
    }

    private init(): void {
        this.router.get("/", (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + '../../views/index.html'));
        });

        this.router.get("/register", (req: Request, res:Response) => {
            res.sendFile(path.join(__dirname + '../../views/register.html'));
        });

        this.router.post('/register', (req: Request, res: Response) => {
            let newUser = new User();
            newUser.name = req.body.name;
            newUser.email = req.body.email;
            newUser.password = req.body.password;

            try {
                UserRepository.addUser(newUser);
                UserRepository.getUsers().then(users => {
                    console.log(users);
                });
                res.json({
                    success: true,
                    msg: 'Registered user'
                });
            } catch (error) {
                res.json({
                    success: false,
                    msg: 'Failed to register'
                });
            }
        });

        this.router.get('/login', ((req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + '../../views/login.html'));
        }));

        // Authenticate
        this.router.post('/auth', (req: Request, res: Response) => {
            res.send('Auth');
        });

        // Profile
        this.router.get('/profile', (req: Request, res: Response) => {
            res.send('profile');
        });
    }
}


export default new Routes().router;
