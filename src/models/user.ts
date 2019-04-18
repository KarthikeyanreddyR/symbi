import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
import { emit } from 'cluster';

export class User extends Typegoose {
    
    @prop()
    name: string;

    @prop({required: true})
    email: string;

    @prop({required: true})
    password: string;

    constructor() {
        super();
        this.name = "";
        this.email = "";
        this.password = "";
    }

}

export const UserModel = new User().getModelForClass(User);

export class UserRepository {
    public static async getUserById(id: number): Promise<InstanceType<User> | null> {
       return UserModel.findById(id);
    }

    public static async getUsers(): Promise<InstanceType<User>[]> {
        return UserModel.find();
     }

    public static addUser(newUser: User): void {
        bcrypt.genSalt(10, (err: Error, salt: string) => {
            if(err) throw err;
            bcrypt.hash(newUser.password, salt, (err: Error, hash: string) => {
                if (err)
                    throw err;
                newUser.password = hash;
                let newUserModel = new UserModel(newUser);
                newUserModel.save();
            });
        });
    }
}