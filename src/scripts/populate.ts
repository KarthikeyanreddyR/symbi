import { User } from "../../angular-src/src/app/shared/models/user";
import { UserModel } from "../models/user";

//Populate the DB with Users
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
    profiles: undefined
});

//Mary is a caregiver
let Mary = new UserModel({
    firstName: "John",
    lastName: "Marston",
    gender: "Male",
    profileImage: undefined,
    email: "notacoward@outlaw.com",
    password: "edgarrosssucks1",
    address: "1776 Texas Rd",
    phoneNumber: undefined,
    bio: "Outlaw bounty hunter seeking caregiver for baby boy",
    profiles: undefined
});