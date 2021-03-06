import express, { NextFunction } from "express";
import { Request, Response } from "express";
import path from "path";
import { JobController } from "../controllers/jobController";

class JobRoutes {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.init();
  }

  //User validation method
  private validateAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(404).json({
      success: false,
      msg: 'Unauthorized access. please Login'
    });
    //return next();
  }

  private init(): void {
    this.router.get("/jobs/openJob", this.validateAuth, (req: Request, res: Response) => {
      JobController.GetAllOpenJobs(req, res);
    });

    this.router.post("/jobs/openJob", this.validateAuth, (req: Request, res: Response) => {
      JobController.CreateOpenJob(req, res);
    });

    this.router.get("/jobs/scheduleJob", this.validateAuth, (req: Request, res: Response) => {
      JobController.GetAllScheduledJobs(req, res);
    });

    this.router.post("/jobs/scheduleJob", this.validateAuth, (req: Request, res: Response) => {
      JobController.CreateScheduleJob(req, res);
    });

    this.router.get("/jobs", this.validateAuth, (req: Request, res: Response) => {
      JobController.GetAllJobs(req, res);
    });

    this.router.get("/jobs/:jobId", this.validateAuth, (req: Request, res: Response) => {
      JobController.GetAllJobsById(req, res);
    });

    this.router.delete("/jobs/:userId/:jobId", this.validateAuth, (req: Request, res: Response) => {
      JobController.DeleteJobForUserIdByJobId(req, res);
    });

    this.router.get("/jobs/jobsByUser/:userId", this.validateAuth, (req: Request, res: Response) => {
      JobController.GetAllJobsByUserId(req, res);
    });

    this.router.get("/jobs/jobsForUser/:userId", this.validateAuth, (req: Request, res: Response) => {
      JobController.GetAllJobsForUserId(req, res);
    });

    this.router.put("/jobs/:jobId", this.validateAuth, (req: Request, res: Response) => {
      JobController.UpdateJobStatus(req, res);
    });
  }
}

export default new JobRoutes().router;
