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
    address: ""
});