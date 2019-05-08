/**
 * Filename: enum.ts
 * Created: 4.28.2019
 * Description: A collection of the enums that will be used
 *              throughout the Symbii program.
 */

 /**
  * Helps define which type of user is currently using the
  * program.
  * PARENT - A parent user
  * CAREGIVER - caregiver user
  */
export enum UserType {
    PARENT, CAREGIVER
  }
  
  /**
   * Helps define the type of job that is being inserted
   * into the database.
   * OPEN_JOB - Has yet to be accepted by a caregiver
   * SCHEDULED_JOB - A job that has been taken by a caregiver
   */
  export enum JobType {
    OPEN_JOB, SCHEDULED_JOB
  }
  
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
  export enum JobStatus {
    CREATED, POSTED, ACCEPTED, INPROGRESS, COMPLETED, REJECTED
  }
  
  /**
   * Keeps track of the status of a contract
   * CREATED - Newly made contract
   * PARENT_SIGNED - Parent has accepted and signed the contract
   * CAREGIVER_SIGNED - Caregiver has accepted and signed the contract
   * COMPLETED - Both parties have accepted the contract
   * REJECTED - One or both parties have rejected the proposed contract
   */
  export enum ContractStatus {
    CREATED, PARENT_SIGNED, CAREGIVER_SIGNED, COMPLETED, REJECTED
  }