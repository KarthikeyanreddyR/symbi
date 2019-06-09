import { Schema, Model, model, Document} from "mongoose";
import { IUser, IProfile, IAddress } from "../interfaces/IUser";
import { AddressSchema } from "./address";
import { ProfileSchema } from "./profile";
import { IFamily, IParent } from "../interfaces/IParent";
import { UserType } from "../interfaces/enums";
import { IExperience, ICaregiver } from "../interfaces/ICaregiver";
const bcrypt = require('bcryptjs');

/**
 * Interface for UserSchema - extends from IUser and Mongoose.Document
 */
export interface IUserSchema extends IUser, Document {
    registerUser(cb: any): void;
    validatePassword(password: string) :boolean;
}

/** UserSchema, used to structure users collection through mongoose schema.
 * firstName: User's first name
 * lastName: User's last name
 * gender: User's gender
 * profileImage: Picture for user's profile
 * email: User's email
 * password: User's password
 * address: User's address
 * phoneNumber:
 * profiles: Collection of ProfileSchemas that hold the user's caregiver profile
 *           and parent profile.
 * bio: Short optional biography for user
 */
const UserSchema:Schema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    gender: {
        type: String
    },
    profileImage: {
        type: Schema.Types.Mixed
    },
    email: {
        type: String,
        required : true,
        unique : true
    },
    password: {
        type: String,
    },
    googleId: {
        type: Number
    },
    address: {
        type: AddressSchema
    },
    phoneNumber: {
        type: Number
    },
    profiles: {
        type : [ProfileSchema]
    },
    bio: {
        type: String
    },
});

/**
 * User schema compilation of interfaces
 * IFamily
 * IParent
 * IProfile
 * ICaregiver
 */
UserSchema.statics.defaultObject = function(): IUser {
    let _family: IFamily = {
        children : [],
        pets : []
    }
    let _parent: IParent = {
        family : _family,
        houseRules : []
    }
    let _parentProfile : IProfile = {
        userType : UserType.PARENT,
        profileData : _parent
    }
    let _caregiver: ICaregiver = {
        birthDate : "",
        certificates : undefined,
        experience : [],
        extraNotes : '',
        rate : 0
    }
    let __caregiverProfile : IProfile = {
        userType : UserType.CAREGIVER,
        profileData : _caregiver
    }
    let _address: IAddress = {
        addressLine1: '',
        addressLine2: '',
        city: '',
        country: '',
        state: '',
        zip: 0,
        geoLocation: []
    }
    return {
        firstName : '',
        lastName: '',
        email: '',
        password: '',
        bio: '',
        gender: '',
        phoneNumber: 0,
        profileImage: undefined,
        address: _address,
        googleId: 0,
        profiles: [_parentProfile, __caregiverProfile],
        reviews: []
    }
}

UserSchema.statics.hashPassword = function(password: string) : string {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

UserSchema.methods.validatePassword = function(password: string) : boolean {
    return bcrypt.compareSync(password, this.password);
}

/**
 * User registration method
 */
UserSchema.methods.registerUser = function(cb:any): void {
    this.save(cb);
}

/** 
 * Model for User, mongoose model from UserSchema
 */
export const UserModel: Model<IUserSchema> = model<IUserSchema>("User", UserSchema);
