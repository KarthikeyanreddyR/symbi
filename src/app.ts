import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import usersRouter from './routes/usersRouter';
import jobRoutes from './routes/jobRoutes';
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
    }

    private routes(): void {
        // map routes
        this.app.use('/api', usersRouter);
        this.app.use('/api/job', jobRoutes);
    }
}