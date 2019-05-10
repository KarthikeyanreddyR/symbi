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

        this.router.get('/jobs', (req: Request, res: Response) => {
            JobListingModel.find({}).lean(true).exec((err: any, jobs: IJobListing[]) => {
                res.json({
                    success: true,
                    data : jobs
                });
            });
        });

        this.router.get('/jobs/:email', (req: Request, res: Response) => {
            let _email = req.params.email;
            UserModel.findOne().where('email').equals(_email).exec((err: any, user:any) => {
                if(err) 
                    console.log(err)
                if(user) {
                    JobListingModel.find({}).where('userID').equals(user._id).lean(true).exec((err: any, jobs: IJobListing[]) => {
                        res.json({
                            success: true,
                            data : jobs
                        });
                    });
                } else {
                    // no user with provided email
                }
            });
        });

    }
}

export default new JobRoutes().router;