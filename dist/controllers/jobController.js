"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var job_1 = require("../models/job");
var enums_1 = require("../interfaces/enums");
var user_1 = require("../models/user");
var JobController = /** @class */ (function () {
    function JobController() {
    }
    JobController.GetAllJobs = function (req, res) {
        job_1.JobModel.find({}).exec(function (err, docs) {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            }
            else {
                res.status(200).json({
                    success: true,
                    data: docs
                });
            }
        });
    };
    JobController.GetAllJobsById = function (req, res) {
        job_1.JobModel.findById(req.params.jobId).exec(function (err, docs) {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            }
            else {
                res.status(200).json({
                    success: true,
                    data: docs
                });
            }
        });
    };
    JobController.GetAllJobsByUserId = function (req, res) {
        var _id = req.params.userId;
        user_1.UserModel.findById(_id).exec(function (err, user) {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            }
            else {
                if (user) {
                    job_1.JobModel.find({}).where('createdBy').equals(user._id).exec(function (err, docs) {
                        if (err) {
                            res.status(500).json({
                                success: false,
                                error: err
                            });
                        }
                        else {
                            res.status(200).json({
                                success: true,
                                data: docs
                            });
                        }
                    });
                }
                else {
                    // no user with provided email
                    res.status(200).json({
                        success: false,
                        msg: "No user with provided user id"
                    });
                }
            }
        });
    };
    JobController.GetAllJobsForUserId = function (req, res) {
        var _id = req.params.userId;
        user_1.UserModel.findById(_id).exec(function (err, user) {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            }
            else {
                if (user) {
                    job_1.JobModel.find({}).where('createdFor').equals(user._id).exec(function (err, docs) {
                        if (err) {
                            res.status(500).json({
                                success: false,
                                error: err
                            });
                        }
                        else {
                            res.status(200).json({
                                success: true,
                                data: docs
                            });
                        }
                    });
                }
                else {
                    // no user with provided email
                    res.status(500).json({
                        success: false,
                        msg: "No user with provided user id"
                    });
                }
            }
        });
    };
    JobController.DeleteJobForUserIdByJobId = function (req, res) {
        var _userId = req.params.userId;
        var _jobId = req.params.jobId;
        // validate userId
        user_1.UserModel.findById(_userId).count().exec(function (err, count) {
            if (count > 0) {
                job_1.JobModel.findByIdAndDelete(_jobId).where('createdBy').equals(_userId).exec(function (err, doc) {
                    if (err) {
                        res.status(500).json({
                            success: false,
                            error: err
                        });
                    }
                    else {
                        if (doc) {
                            res.status(200).json({
                                success: true,
                                data: doc,
                                msg: "deleted job"
                            });
                        }
                        else {
                            res.status(200).json({
                                success: false,
                                msg: "No job with given job id"
                            });
                        }
                    }
                });
            }
            else {
                // no user with id
                res.status(200).json({
                    success: false,
                    msg: "No user with given user id"
                });
            }
        });
    };
    JobController.GetAllOpenJobs = function (req, res) {
        job_1.JobModel.find().where('jobType').equals(enums_1.JobType.OPEN_JOB).exec(function (err, docs) {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            }
            else {
                res.status(200).json({
                    success: true,
                    data: docs
                });
            }
        });
    };
    JobController.GetAllScheduledJobs = function (req, res) {
        job_1.JobModel.find().where('jobType').equals(enums_1.JobType.SCHEDULED_JOB).exec(function (err, docs) {
            if (err) {
                res.status(500).json({
                    success: false,
                    error: err
                });
            }
            else {
                res.status(200).json({
                    success: true,
                    data: docs
                });
            }
        });
    };
    JobController.CreateOpenJob = function (req, res) {
        try {
            var _job = job_1.JobModel.schema.statics.defaultObject();
            _job.createdBy = req.body.userId;
            _job.jobName = req.body.jobName;
            _job.createdAt = req.body.createdAt;
            _job.jobStartTime = req.body.jobStartTime;
            _job.jobEndTime = req.body.jobEndTime;
            _job.jobNotes = req.body.jobNotes;
            _job.jobStatus = enums_1.JobStatus.CREATED;
            _job.jobType = enums_1.JobType.OPEN_JOB;
            _job.createdFor = undefined;
            new job_1.JobModel(_job).createJob(function (err, doc) {
                if (err) {
                    res.status(500).json({
                        success: false,
                        error: err
                    });
                }
                else {
                    res.status(200).json({
                        success: true,
                        data: doc
                    });
                }
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                error: error
            });
        }
    };
    JobController.CreateScheduleJob = function (req, res) {
        try {
            var _job = job_1.JobModel.schema.statics.defaultObject();
            _job.createdBy = req.body.userId;
            _job.jobName = req.body.jobName;
            _job.createdAt = req.body.createdAt;
            _job.jobStartTime = req.body.jobStartTime;
            _job.jobEndTime = req.body.jobEndTime;
            _job.jobNotes = req.body.jobNotes;
            _job.jobStatus = enums_1.JobStatus.CREATED;
            _job.jobType = enums_1.JobType.SCHEDULED_JOB;
            _job.createdFor = req.body.createdFor;
            new job_1.JobModel(_job).createJob(function (err, doc) {
                if (err) {
                    res.status(500).json({
                        success: false,
                        error: err
                    });
                }
                else {
                    res.status(200).json({
                        success: true,
                        data: doc
                    });
                }
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                error: error
            });
        }
    };
    return JobController;
}());
exports.JobController = JobController;
