"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var address_1 = require("./address");
var profile_1 = require("./profile");
var enums_1 = require("../interfaces/enums");
var bcrypt = require('bcryptjs');
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
var UserSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.Mixed
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    googleId: {
        type: Number
    },
    address: {
        type: address_1.AddressSchema
    },
    phoneNumber: {
        type: Number
    },
    profiles: {
        type: [profile_1.ProfileSchema]
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
UserSchema.statics.defaultObject = function () {
    var _family = {
        children: [],
        pets: []
    };
    var _parent = {
        family: _family,
        houseRules: []
    };
    var _parentProfile = {
        userType: enums_1.UserType.PARENT,
        profileData: _parent
    };
    var _caregiver = {
        birthDate: "",
        certificates: undefined,
        experience: [],
        extraNotes: '',
        rate: 0
    };
    var __caregiverProfile = {
        userType: enums_1.UserType.CAREGIVER,
        profileData: _caregiver
    };
    var _address = {
        addressLine1: '',
        addressLine2: '',
        city: '',
        country: '',
        state: '',
        zip: 0,
        geoLocation: []
    };
    return {
        firstName: '',
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
    };
};
UserSchema.statics.hashPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
UserSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
/**
 * User registration method
 */
UserSchema.methods.registerUser = function (cb) {
    this.save(cb);
};
/**
 * Model for User, mongoose model from UserSchema
 */
exports.UserModel = mongoose_1.model("User", UserSchema);
