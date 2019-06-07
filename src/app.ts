import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import userRoutes from './routes/userRoutes';
import jobRoutes from './routes/jobRoutes';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import config from './config/database';
import { PassportGoogleStrategy } from './auth/passport-google-strategy';
const MongoStore = require('connect-mongo')(session);
/**
 * Class to manage Express app.
 * Middleware such as body-parser, cors are managed.
 * Server routes and static folder config is managed.
 */
export class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        // body-parser middleware
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // enable corss-origin request
        this.app.use(cors());

        //set static folder
        this.app.use(express.static(path.join(__dirname, '../public')));

        this.app.set('json replacer', function (key: any, value: any) {
            // undefined values are set to `null`
            if (typeof value === "undefined") {
                return "";
            }
            return value;
        }
        );

        this.app.use(cookieParser());

        // Express Session
        this.app.use(session({
            secret: 'iamadevinsymbiiproject',
            saveUninitialized: true,
            resave: true,
            store: new MongoStore({
                url: config.database
            })
        }));

        // passportjs config
        this.app.use(passport.initialize());
        this.app.use(passport.session())

        // initialize google passport strategy
        new PassportGoogleStrategy();
    }

    private routes(): void {
        // map routes
        this.app.use('/api', userRoutes, jobRoutes);
    }
}