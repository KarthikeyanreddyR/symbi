import express from "express";
import { Request, Response } from "express";
import path from "path";
import { JobController } from "../controllers/jobController";

class JobRoutes {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.init();
  }

  private init(): void {
    this.router.get("/jobs/openJob", (req: Request, res: Response) => {
      JobController.GetAllOpenJobs(req, res);
    });

    this.router.post("/jobs/openJob", (req: Request, res: Response) => {
      JobController.CreateOpenJob(req, res);
    });

    this.router.get("/jobs/scheduleJob", (req: Request, res: Response) => {
      JobController.GetAllScheduledJobs(req, res);
    });

    this.router.post("/jobs/scheduleJob", (req: Request, res: Response) => {
      JobController.CreateScheduleJob(req, res);
    });

    this.router.get("/jobs", (req: Request, res: Response) => {
      JobController.GetAllJobs(req, res);
    });

    this.router.get("/jobs/:jobId", (req: Request, res: Response) => {
      JobController.GetAllJobsById(req, res);
    });

    this.router.delete(
      "/jobs/:userId/:jobId",
      (req: Request, res: Response) => {
        JobController.DeleteJobForUserIdByJobId(req, res);
      }
    );

    this.router.get(
      "/jobs/jobsByUser/:userId",
      (req: Request, res: Response) => {
        JobController.GetAllJobsByUserId(req, res);
      }
    );

    this.router.get(
      "/jobs/jobsForUser/:userId",
      (req: Request, res: Response) => {
        JobController.GetAllJobsForUserId(req, res);
      }
    );
  }
}

export default new JobRoutes().router;
