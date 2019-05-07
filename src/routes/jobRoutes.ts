import express from "express";
import { Request, Response } from "express";
import { JobListingModel } from "../models/joblisting";
import { IJobListing } from "../interfaces/IJobListing";
import { UserType, JobStatus, JobType } from "../interfaces/enums";
import path from "path";
import { IEvent } from "../interfaces/IEvent";
import { IJob } from "../interfaces/IJob";
import { UserModel } from "../models/user";
import { IUser } from "../interfaces/IUser";

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

        this.router.get('/openJob', (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname + '../../views/openJob.html'))
        });

        this.router.post('/openJob', (req: Request, res: Response) => {
            let _event: IEvent = {
                title: req.body.title,
                startTime: new Date(req.body.startDate),
                endTime: new Date(req.body.endDate),
                date: new Date()
            }

            let _job: IJob = {
                jobTime: _event,
                jobID: '',
                jobName: _event.title,
                jobNotes: req.body.notes,
                jobStatus: JobStatus.CREATED,
                jobType: JobType.OPEN_JOB
            }
            let _userId: string = '';
            let _joblisting: IJobListing = {
                userType: UserType.PARENT,
                jobs: [_job]
            }
            UserModel.findOne({}).exec().then((user:any) => {
                _joblisting.userID = user['_id'];
                new JobListingModel(_joblisting).createJobListing((err: any, doc: IJobListing) => {
                    if(err) {
                        res.json({
                            success: false,
                            msg: 'error occurred'
                        });
                    } else {
                        res.json({
                            success: true,
                            msg: 'created job',
                            data: doc
                        })
                    }
                });
            }, (err: any) => {
                console.log(err);
                res.json({
                    success: false,
                    msg: 'error occurred'
                })
            });
        });

    }
}

export default new JobRoutes().router;