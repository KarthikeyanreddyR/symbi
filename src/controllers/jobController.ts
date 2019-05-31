import { Request, Response } from "express";
import { JobModel } from "../models/job";
import { IJob } from "../interfaces/IJob";
import { JobStatus, JobType } from "../interfaces/enums";
import { UserModel } from "../models/user";

export class JobController {

    public static GetAllJobs(req: Request, res: Response) {
        JobModel.find({}).exec((err: any, docs: IJob[]) => {
            if (err) {
                res.json({
                    success: false,
                    error: err
                }).status(500);
            } else {
                res.json({
                    success: true,
                    data: docs
                }).status(200);
            }
        });
    }

    public static GetAllJobsById(req: Request, res: Response) {
        JobModel.findById(req.params.jobId).exec((err: any, docs: IJob[]) => {
            if (err) {
                res.json({
                    success: false,
                    error: err
                }).status(500);
            } else {
                res.json({
                    success: true,
                    data: docs
                }).status(200);
            }
        });
    }

    public static GetAllJobsByUserId(req: Request, res: Response) {
        let _id = req.params.id;
        UserModel.findById(_id).exec((err: any, user: any) => {
            if (err) {
                res.json({
                    success: false,
                    error: err
                }).status(500);
            } else {
                if (user) {
                    JobModel.find({}).where('createdBy').equals(user._id).exec((err: any, docs: IJob[]) => {
                        if (err) {
                            res.json({
                                success: false,
                                error: err
                            }).status(500);
                        } else {
                            res.json({
                                success: true,
                                data: docs
                            }).status(200);
                        }
                    });
                } else {
                    // no user with provided email
                    res.json({
                        success: false,
                        msg: "No user with provided user id"
                    }).status(500);
                }
            }
        });
    }

    public static GetAllJobsForUserId(req: Request, res: Response) {
        let _id = req.params.id;
        UserModel.findById(_id).exec((err: any, user: any) => {
            if (err) {
                res.json({
                    success: false,
                    error: err
                }).status(500);
            } else {
                if (user) {
                    JobModel.find({}).where('createdFor').equals(user._id).exec((err: any, docs: IJob[]) => {
                        if (err) {
                            res.json({
                                success: false,
                                error: err
                            }).status(500);
                        } else {
                            res.json({
                                success: true,
                                data: docs
                            }).status(200);
                        }
                    });
                } else {
                    // no user with provided email
                    res.json({
                        success: false,
                        msg: "No user with provided user id"
                    }).status(500);
                }
            }
        });
    }

    public static DeleteJobForUserIdByJobId(req: Request, res: Response) {
        let _userId: string = req.params.userId;
        let _jobId: string = req.params.jobId;

        // validate userId
        UserModel.findById(_userId).count().exec((err: any, count: number) => {
            if (count > 0) {
                JobModel.findByIdAndDelete(_jobId).where('createdBy').equals(_userId).exec((err: any, doc: IJob) => {
                    if (err) {
                        res.json({
                            success: false,
                            error: err
                        }).status(500);
                    } else {
                        if (doc) {
                            res.json({
                                success: true,
                                data: doc,
                                msg: "deleted job"
                            }).status(200);
                        } else {
                            res.json({
                                success: false,
                                msg: "No job with given job id"
                            }).status(500);
                        }
                    }
                });

            } else {
                // no user with id
                res.json({
                    success: false,
                    msg: "No user with given user id"
                }).status(500);
            }
        });
    }

    public static GetAllOpenJobs(req: Request, res: Response) {
        JobModel.find().where('jobType').equals(JobType.OPEN_JOB).exec((err: any, docs: IJob[]) => {
            if (err) {
                res.json({
                    success: false,
                    error: err
                }).status(500);
            } else {
                res.json({
                    success: true,
                    data: docs
                }).status(200);
            }
        });
    }

    public static GetAllScheduledJobs(req: Request, res: Response) {
        JobModel.find().where('jobType').equals(JobType.SCHEDULED_JOB).exec((err: any, docs: IJob[]) => {
            if (err) {
                res.json({
                    success: false,
                    error: err
                }).status(500);
            } else {
                res.json({
                    success: true,
                    data: docs
                }).status(200);
            }
        });
    }

    public static CreateOpenJob(req: Request, res: Response) {
        try {
            let _job: IJob = JobModel.schema.statics.defaultObject();
            _job.createdBy = req.body.userId;
            _job.jobName = req.body.jobName;
            _job.createdAt = req.body.createdAt;
            _job.jobStartTime = req.body.jobStartTime;
            _job.jobEndTime = req.body.jobEndTime;
            _job.jobNotes = req.body.jobNotes;
            _job.jobStatus = JobStatus.CREATED;
            _job.jobType = JobType.OPEN_JOB;
            _job.createdFor = undefined;

            new JobModel(_job).createJob((err: any, doc: IJob) => {
                if (err) {
                    res.json({
                        success: false,
                        error: err
                    }).status(500);
                } else {
                    res.json({
                        success: true,
                        data: doc
                    }).status(200);
                }
            });
        } catch (error) {
            res.json({
                success: false,
                error: error
            }).status(500);
        }
    }

    public static CreateScheduleJob(req: Request, res: Response) {
        try {
            let _job: IJob = JobModel.schema.statics.defaultObject();
            _job.createdBy = req.body.userId;
            _job.jobName = req.body.jobName;
            _job.createdAt = req.body.createdAt;
            _job.jobStartTime = req.body.jobStartTime;
            _job.jobEndTime = req.body.jobEndTime;
            _job.jobNotes = req.body.jobNotes;
            _job.jobStatus = JobStatus.CREATED;
            _job.jobType = JobType.SCHEDULED_JOB;
            _job.createdFor = req.body.createdFor;

            new JobModel(_job).createJob((err: any, doc: IJob) => {
                if (err) {
                    res.json({
                        success: false,
                        error: err
                    }).status(500);
                } else {
                    res.json({
                        success: true,
                        data: doc
                    }).status(200);
                }
            });
        } catch (error) {
            res.json({
                success: false,
                error: error
            }).status(500);
        }
    }
}