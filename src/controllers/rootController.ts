import { Response } from "express";

export class RootController {
    constructor() {

    }

    public static ApiRootDocumentation(res: Response) {
        res.json({
            "documentation": [
                {
                    "route": "/api/register",
                    "method": "POST",
                    "description": "Register user"
                },
                {
                    "route":"/api/login",
                    "method":"POST",
                    "description":"Login user",
                },
                {
                    "route":"/api/users",
                    "method":"GET",
                    "description":"Retrieve all users",
                },
                {
                    "route":"/api/users/:userID",
                    "method":"GET",
                    "description":"Retrieve user based on id",
                },
                {
                    "route":"/api/users/:userID",
                    "method":"PUT",
                    "description":"Update user",
                },
                {
                    "route":"/api/review",
                    "method":"POST",
                    "description":"Post review",
                },
                {
                    "route":"/api/reviewsByUser/:userID",
                    "method":"GET",
                    "description":"Get all review by user",
                },
                {
                    "route":"/api/reviewsForUser/:userID",
                    "method":"GET",
                    "description":"Get all review for user",
                },
                {
                    "route":"/api/review/:userID/:reviewID",
                    "method":"DELETE",
                    "description":"Delete a review for given userID",
                },
                {
                    "route":"/api/jobs",
                    "method":"GET",
                    "description":"Retrieve a list of all jobs",
                },
                {
                    "route":"/api/jobs/:jobID",
                    "method":"GET",
                    "description":"Retrieve job based on jobID",
                },
                {
                    "route":"/api/job/:userID",
                    "method":"GET",
                    "description":"Retrieve a job based on a userID",
                },
                {
                    "route":"/api/jobs/jobsByUser/:userID",
                    "method":"GET",
                    "description":"Get all jobs created by userID",
                },
                {
                    "route":"/api/jobs/jobsForUser/:userID",
                    "method":"GET",
                    "description":"Get all jobs for user by userID",
                },
                {
                    "route":"/api/jobs/openJob",
                    "method":"POST",
                    "description":"Post an open job",
                },
                {
                    "route":"/api/jobs/openJob",
                    "method":"GET",
                    "description":"Retrieve a list of only open jobs",
                },
                {
                    "route":"/api/jobs/scheduleJob",
                    "method":"POST",
                    "description":"Schedule a job with caregiver indicated in body",
                },
                {
                    "route":"/api/jobs/scheduleJob",
                    "method":"GET",
                    "description":"Retrieve a list of all scheduled jobs",
                },
                {
                    "route":"/api/job/:userID/:jobID",
                    "method":"GET",
                    "description":"Delete a specific job by jobID for given userID",
                }
            ]
        });
    }
}
