import { Schema, Model, model} from "mongoose";
import { IUser } from "../interfaces/IUser";
import { AddressSchema } from "./address";
import { ProfileSchema } from "./profile";

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

UserSchema.methods.registerUser = (user:IUser, cb:any) => {
    return new UserModel(user).save(cb);
}

export const UserModel: Model<IUser> = model<IUser>("User", UserSchema);


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