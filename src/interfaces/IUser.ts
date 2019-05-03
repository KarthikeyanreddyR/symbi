import { Document } from "mongoose";
import { UserType } from "./enums";

export interface User extends Document {
    firstName: string;
    lastName: string;
    gender: string;
    profileImage: Blob;
    email: string;
    password: string;
    address: Address;
    phoneNumber: number;
    bio: string;
    profiles: Profile[];
}

export interface Profile {
    userType: UserType;
    //profileData: Parent | Caregiver;
}

export interface Address {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    geoLocation: string[];
}