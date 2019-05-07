export interface ICaregiver {
    birthDate: Date | undefined;
    rate: number;
    certificates: File[] | undefined;
    experience: IExperience[];
    extraNotes: string;
}

export interface IExperience {
    jobPlace: string;
    jobDesignation: string;
    jobDescription: string;
    startDate: Date |undefined;
    endDate: Date |undefined;
}