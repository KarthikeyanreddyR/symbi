import { Request, Response } from "express";
import { JobModel, IJobSchema } from "../models/job";
import { IJob } from "../interfaces/IJob";
import { JobStatus, JobType, ContractStatus } from "../interfaces/enums";
import { UserModel } from "../models/user";
import { IContract } from "../interfaces/IContract";
import { ContractModel } from "../models/contract";

export class JobController {

    public static GetAllJobs(req: Request, res: Response) {
        JobModel.find({}).exec((err: any, docs: IJob[]) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: docs
                });
            }
        });
    }

    public static GetAllJobsById(req: Request, res: Response) {
        JobModel.findById(req.params.jobId).exec((err: any, docs: IJob[]) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: docs
                });
            }
        });
    }

    public static GetAllJobsByUserId(req: Request, res: Response) {
        let _id = req.params.userId;
        UserModel.findById(_id).exec((err: any, user: any) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            } else {
                if (user) {
                    JobModel.find({}).where('createdBy').equals(user._id).exec((err: any, docs: IJob[]) => {
                        if (err) {
                            res.status(500).json({
                                success: false,
                                error: err
                            });
                        } else {
                            res.status(200).json({
                                success: true,
                                data: docs
                            });
                        }
                    });
                } else {
                    // no user with provided email
                    res.status(200).json({
                        success: false,
                        msg: "No user with provided user id"
                    });
                }
            }
        });
    }

    public static GetAllJobsForUserId(req: Request, res: Response) {
        let _id = req.params.userId;
        UserModel.findById(_id).exec((err: any, user: any) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            } else {
                if (user) {
                    JobModel.find({}).where('createdFor').equals(user._id).exec((err: any, docs: IJob[]) => {
                        if (err) {
                            res.status(500).json({
                                success: false,
                                error: err
                            });
                        } else {
                            res.status(200).json({
                                success: true,
                                data: docs
                            });
                        }
                    });
                } else {
                    // no user with provided email
                    res.status(500).json({
                        success: false,
                        msg: "No user with provided user id"
                    });
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
                        res.status(500).json({
                            success: false,
                            error: err
                        });
                    } else {
                        if (doc) {
                            res.status(200).json({
                                success: true,
                                data: doc,
                                msg: "deleted job"
                            });
                        } else {
                            res.status(200).json({
                                success: false,
                                msg: "No job with given job id"
                            });
                        }
                    }
                });

            } else {
                // no user with id
                res.status(200).json({
                    success: false,
                    msg: "No user with given user id"
                });
            }
        });
    }

    public static GetAllOpenJobs(req: Request, res: Response) {
        JobModel.find().where('jobType').equals(JobType.OPEN_JOB).exec((err: any, docs: IJob[]) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: docs
                });
            }
        });
    }

    public static GetAllScheduledJobs(req: Request, res: Response) {
        JobModel.find().where('jobType').equals(JobType.SCHEDULED_JOB).exec((err: any, docs: IJob[]) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: docs
                });
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

            new JobModel(_job).createJob((err: any, doc: IJobSchema) => {
                if (err) {
                    res.status(500).json({
                        success: false,
                        error: err
                    });
                } else {
                    let _contract: IContract = {
                        contractCheck: false,
                        contractContent: undefined,
                        contractStatus: ContractStatus.CREATED,
                        jobId: doc._id,
                        promiseeDate: '',
                        promiserDate: doc.createdAt,
                        promiseeId: undefined,
                        promiserId: doc.createdBy
                    }
                    return JobController.CreateNewContract(_contract, (contract:any) => {
                        if(contract.success) {
                            return res.status(200).json({
                                success: true,
                                data: {
                                    job: doc,
                                    contract: contract.data
                                }
                            });
                        } else {
                            return res.status(200).json({
                                success: false,
                                data: {
                                    job: doc,
                                    contract: contract.error
                                },
                                msg: 'Job created but contract creation failed'
                            });
                        }
                    });
                }
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            });
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

            new JobModel(_job).createJob((err: any, doc: IJobSchema) => {
                if (err) {
                    res.status(500).json({
                        success: false,
                        error: err
                    });
                } else {
                    let _contract: IContract = {
                        contractCheck: false,
                        contractContent: undefined,
                        contractStatus: ContractStatus.CREATED,
                        jobId: doc._id,
                        promiseeDate: '',
                        promiserDate: doc.createdAt,
                        promiseeId: undefined,
                        promiserId: doc.createdBy
                    }
                    return JobController.CreateNewContract(_contract, (contract:any) => {
                        if(contract.success) {
                            return res.status(200).json({
                                success: true,
                                data: {
                                    job: doc,
                                    contract: contract.data
                                }
                            });
                        } else {
                            return res.status(200).json({
                                success: false,
                                data: {
                                    job: doc,
                                    contract: contract.error
                                },
                                msg: 'Job created but contract creation failed'
                            });
                        }
                    });
                }
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            });
        }
    }

    public static CreateNewContract(_contract: IContract, done:any) : void {
        new ContractModel(_contract).createContract((err:any, doc: IContract) => {
            if (err) {
                console.log(err);
                return done({
                    success: false,
                    error: err
                });
            } else {
                console.log(doc);
                return done({
                    success: true,
                    data: doc
                });
            }
        })
    }
}