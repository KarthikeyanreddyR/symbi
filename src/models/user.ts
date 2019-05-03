import { Document, Schema, Model, model} from "mongoose";

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
        type: String
    },
    password: {
        type: String
    },
    address: {
        type: Schema.Types.ObjectId, ref: 'Address'
    },
    phoneNumber: {
        type: Number
    },
    profiles: {

    },
    bio: {
        type: String
    },
});

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