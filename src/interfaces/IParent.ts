export interface IParent {
    family: IFamily;
    houseRules: string[];
}

export interface IFamily {
    children: IChild[];
    pets: IPet[];
}

export interface IChild {
    name:string;
    gender:string;
    birthDate:Date | undefined;
    specialNeeds:string[];
    sleepTime:Date | undefined;
    diet:string[];
    extraNotes:string[];
}

export interface IPet {
    name:string;
    species:string;
    diet:string[];
    extraNotes:string[];
}