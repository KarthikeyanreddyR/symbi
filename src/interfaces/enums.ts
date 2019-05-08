/**
 * 
 */
export enum UserType {
    PARENT, CAREGIVER
  }
  
  export enum JobType {
    OPEN_JOB, SCHEDULED_JOB
  }
  
  export enum JobStatus {
    CREATED, POSTED, ACCEPTED, INPROGRESS, COMPLETED, REJECTED
  }
  
  export enum ContractStatus {
    CREATED, PARENT_SIGNED, CAREGIVER_SIGNED, COMPLETED, REJECTED
  }