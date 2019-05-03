export interface ICaregiver {
    birthDate: Date;
    rate: number;
    certificates: File[];
    experience: IExperience[];
    extraNotes: string;
}

export interface IExperience {
    jobPlace: string;
    jobDesignation: string;
    jobDescription: string;
    startDate: Date;
    endDate: Date;
}