/**
 * Filename: ICaregiver.ts
 * Created: 5.1.2019
 * Description: Interfaces that are used by the Caregiver
 *              class.
 */

 /**
  * Interface for the Caregiver class, contains the same 
  * information from the Caregiver schema under 
  * models/caregiver.ts
  * birthDate - Caregiver's date of birth
  * rate - Caregiver's publicly posted rate they work per hour
  * certificates - A collection of posted certificates for
  *                parents to view
  * experience - A collection of IExperience to function as 
  *              a sort of 'resume' for caregivers to display
  *              on their profiles
  * extraNotes - Extra notes that a caregiver can display on
  *              on their profile.
  */
export interface ICaregiver {
    birthDate: Date | undefined;
    rate: number;
    certificates: File[] | undefined;
    experience: IExperience[];
    extraNotes: string;
}

/**
 * Interface for a caregiver's Experience. Experience functions
 * like a resume for caregiver's. 
 * jobPlace - Location of job
 * jobDesignation - Position held at job
 * jobDescription - Description of the job
 * startDate - Job's start date
 * endDate - Job's end date
 */
export interface IExperience {
    jobPlace: string;
    jobDesignation: string;
    jobDescription: string;
    startDate: Date |undefined;
    endDate: Date |undefined;
}