"use strict";
/**
 * Filename: enum.ts
 * Created: 4.28.2019
 * Description: A collection of the enums that will be used
 *              throughout the Symbii program.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helps define which type of user is currently using the
 * program.
 * PARENT - A parent user
 * CAREGIVER - caregiver user
 */
var UserType;
(function (UserType) {
    UserType[UserType["UNKNOWN"] = 0] = "UNKNOWN";
    UserType[UserType["PARENT"] = 1] = "PARENT";
    UserType[UserType["CAREGIVER"] = 2] = "CAREGIVER";
})(UserType = exports.UserType || (exports.UserType = {}));
/**
 * Helps define the type of job that is being inserted
 * into the database.
 * OPEN_JOB - Has yet to be accepted by a caregiver
 * SCHEDULED_JOB - A job that has been taken by a caregiver
 */
var JobType;
(function (JobType) {
    JobType[JobType["UNKNOWN"] = 0] = "UNKNOWN";
    JobType[JobType["OPEN_JOB"] = 1] = "OPEN_JOB";
    JobType[JobType["SCHEDULED_JOB"] = 2] = "SCHEDULED_JOB";
})(JobType = exports.JobType || (exports.JobType = {}));
/**
 * Defines the status of a current job. As the parent and
 * the caregiver communicate, the status of the job changes.
 * CREATED - A newly created job
 * POSTED - Job has been posted publicly
 * ACCEPTED - Job has been accepted by a caregiver and the parent
 * has agreed
 * INPROGRESS - The job is currently in progress of completion
 * COMPLETED - The job has been completed
 * REJECTED - The parent/caregiver have rejected the job
 */
var JobStatus;
(function (JobStatus) {
    JobStatus[JobStatus["UNKNOWN"] = 0] = "UNKNOWN";
    JobStatus[JobStatus["CREATED"] = 1] = "CREATED";
    JobStatus[JobStatus["POSTED"] = 2] = "POSTED";
    JobStatus[JobStatus["ACCEPTED"] = 3] = "ACCEPTED";
    JobStatus[JobStatus["INPROGRESS"] = 4] = "INPROGRESS";
    JobStatus[JobStatus["COMPLETED"] = 5] = "COMPLETED";
    JobStatus[JobStatus["REJECTED"] = 6] = "REJECTED";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
/**
 * Keeps track of the status of a contract
 * CREATED - Newly made contract
 * PARENT_SIGNED - Parent has accepted and signed the contract
 * CAREGIVER_SIGNED - Caregiver has accepted and signed the contract
 * COMPLETED - Both parties have accepted the contract
 * REJECTED - One or both parties have rejected the proposed contract
 */
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["UNKNOWN"] = 0] = "UNKNOWN";
    ContractStatus[ContractStatus["CREATED"] = 1] = "CREATED";
    ContractStatus[ContractStatus["PARENT_SIGNED"] = 2] = "PARENT_SIGNED";
    ContractStatus[ContractStatus["CAREGIVER_SIGNED"] = 3] = "CAREGIVER_SIGNED";
    ContractStatus[ContractStatus["COMPLETED"] = 4] = "COMPLETED";
    ContractStatus[ContractStatus["REJECTED"] = 5] = "REJECTED";
})(ContractStatus = exports.ContractStatus || (exports.ContractStatus = {}));
