import express from "express";
import { Request, Response } from "express";
import { JobListingModel } from "../models/joblisting";
import { IJobListing } from "../interfaces/IJobListing";
import { UserType } from "../interfaces/enums";

class JobRoutes {
    public router: express.Router;

    constructor() {
        this.router = express.Router();
        this.init();
    }

    private init(): void {

        this.router.post('/jobListing', (req: Request, res: Response) => {
            let doc: IJobListing = {
                userType: UserType.PARENT
            }
            let jModel = new JobListingModel(doc);
            jModel.createJobListing((err: any, doc: IJobListing) => {
                console.log(doc);
            })
            res.send('req completed');
        })

    }
}

export default new JobRoutes().router;