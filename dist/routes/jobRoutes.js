"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var jobController_1 = require("../controllers/jobController");
var JobRoutes = /** @class */ (function () {
    function JobRoutes() {
        this.router = express_1.default.Router();
        this.init();
    }
    //User validation method
    JobRoutes.prototype.validateAuth = function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.status(404).json({
            success: false,
            msg: 'Unauthorized access. please Login'
        });
        //return next();
    };
    JobRoutes.prototype.init = function () {
        this.router.get("/jobs/openJob", this.validateAuth, function (req, res) {
            jobController_1.JobController.GetAllOpenJobs(req, res);
        });
        this.router.post("/jobs/openJob", this.validateAuth, function (req, res) {
            jobController_1.JobController.CreateOpenJob(req, res);
        });
        this.router.get("/jobs/scheduleJob", this.validateAuth, function (req, res) {
            jobController_1.JobController.GetAllScheduledJobs(req, res);
        });
        this.router.post("/jobs/scheduleJob", this.validateAuth, function (req, res) {
            jobController_1.JobController.CreateScheduleJob(req, res);
        });
        this.router.get("/jobs", this.validateAuth, function (req, res) {
            jobController_1.JobController.GetAllJobs(req, res);
        });
        this.router.get("/jobs/:jobId", this.validateAuth, function (req, res) {
            jobController_1.JobController.GetAllJobsById(req, res);
        });
        this.router.delete("/jobs/:userId/:jobId", this.validateAuth, function (req, res) {
            jobController_1.JobController.DeleteJobForUserIdByJobId(req, res);
        });
        this.router.get("/jobs/jobsByUser/:userId", this.validateAuth, function (req, res) {
            jobController_1.JobController.GetAllJobsByUserId(req, res);
        });
        this.router.get("/jobs/jobsForUser/:userId", this.validateAuth, function (req, res) {
            jobController_1.JobController.GetAllJobsForUserId(req, res);
        });
    };
    return JobRoutes;
}());
exports.default = new JobRoutes().router;
