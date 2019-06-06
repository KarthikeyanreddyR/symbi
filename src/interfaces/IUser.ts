/**
 * Filename: IUser.ts
 * Created: 5.5.2019
 * Description: 
 */
import { UserType } from "./enums";
import { ICaregiver } from "./ICaregiver";
import { IParent } from "./IParent";
import { IReview } from "./IReview";

export interface IUser {
    firstName: string;
    lastName: string;
    gender: string;
    profileImage: Blob | String | undefined;
    email: string;
    password: string;
    googleId:Number;
    address: IAddress;
    phoneNumber: number;
    bio: string;
    profiles: IProfile[];
    reviews: IReview[];
}

export interface IProfile {
    userType: UserType;
    profileData: IParent | ICaregiver;
}

export interface IAddress {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    geoLocation: string[];
}