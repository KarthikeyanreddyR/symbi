export interface IParent {
    family: IFamily;
    houseRules: string[];
}

export interface IFamily {
    children: IChild[];
    pets: IPet[];
}

export interface IChild {
    name: string;
    gender: string;
    birthDate: string;
    specialNeeds: string[];
    sleepTime: string;
    diet: string[];
    extraNotes: string[];
}

export interface IPet {
    name: string;
    species: string;
    diet: string[];
    extraNotes: string[];
}