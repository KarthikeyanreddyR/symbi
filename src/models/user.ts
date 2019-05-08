import { Schema, Model, model, Document} from "mongoose";
import { IUser, IProfile } from "../interfaces/IUser";
import { AddressSchema } from "./address";
import { ProfileSchema } from "./profile";
import { IFamily, IParent } from "../interfaces/IParent";
import { UserType } from "../interfaces/enums";
import { IExperience, ICaregiver } from "../interfaces/ICaregiver";

interface IUserSchema extends IUser, Document {
    //defaultObject() : IUser;
    registerUser(cb: any): void;
}

const UserSchema:Schema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    profileImage: {
        data: Buffer,
        contentType: String
    },
    email: {
        type: String,
        required : true,
        unique : true
    },
    password: {
        type: String,
        required : true,
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
        birthDate : undefined,
        certificates : undefined,
        experience : [],
        extraNotes : '',
        rate : 0
    }
    let __caregiverProfile : IProfile = {
        userType : UserType.CAREGIVER,
        profileData : _caregiver
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
        address: undefined,
        profiles: [_parentProfile, __caregiverProfile]
    }
}

UserSchema.methods.registerUser = function(cb:any): void {
    this.save(cb);
}

export const UserModel: Model<IUserSchema> = model<IUserSchema>("User", UserSchema);


/* PASSWORD HASH CODE BELOW - DO NOT TOUCH */
// bcrypt.genSalt(10, (err: Error, salt: string) => {
//     if(err) throw err;
//     bcrypt.hash(newUser.password, salt, (err: Error, hash: string) => {
//         if (err)
//             throw err;
//         newUser.password = hash;
//         let newUserModel = new UserModel(newUser);
//         newUserModel.save();
//     });
// });