import { UserModel } from "../models/user";
import { IProfile } from "../interfaces/IUser";
import { UserType } from "../interfaces/enums";
import { IParent, IChild, IFamily, IPet } from "../interfaces/IParent";
import { ICaregiver, IExperience } from "../interfaces/ICaregiver";

//Populate the DB with Users

let _child: IChild = {
    name : '',
    birthDate : undefined,
    diet : [],
    extraNotes : [],
    gender : '',
    sleepTime : undefined,
    specialNeeds : []
}
let _pet: IPet = {
    name : '',
    species : '',
    diet : [],
    extraNotes: []
}
let _family: IFamily = {
    children : [_child, _child],
    pets : [_pet, _pet]
}
let _parent: IParent = {
    family : _family,
    houseRules : []
}
let _parentProfile : IProfile = {
    userType : UserType.PARENT,
    profileData : _parent
}
//John is a Parent
let John = new UserModel({
    firstName: "John",
    lastName: "Marston",
    gender: "Male",
    profileImage: undefined,
    email: "notacoward@outlaw.com",
    password: "edgarrosssucks1",
    address: "1776 Texas Rd",
    phoneNumber: undefined,
    bio: "Outlaw bounty hunter seeking caregiver for baby boy",
    profiles: [_parentProfile]
});

let _experience: IExperience = {
    endDate : undefined,
    jobDescription : '',
    jobDesignation : '',
    jobPlace : '',
    startDate : undefined
}
let _caregiver: ICaregiver = {
    birthDate : undefined,
    certificates : undefined,
    experience : [_experience, _experience],
    extraNotes : '',
    rate : 20
}
let __caregiverProfile : IProfile = {
    userType : UserType.CAREGIVER,
    profileData : _caregiver
}

//Mary is a caregiver
let Mary = new UserModel({
    firstName: "Mary",
    lastName: "Jane",
    gender: "Female",
    profileImage: undefined,
    email: "arachnoqueen@gmail.com",
    password: "spiderman11",
    address: "180 13th ave",
    phoneNumber: undefined,
    bio: "Freelance actor, part-time caregiver!",
    profiles: [__caregiverProfile, _parentProfile]
});