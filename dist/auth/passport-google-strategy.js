"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var user_1 = require("../models/user");
var globals_1 = __importDefault(require("../config/globals"));
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var PassportGoogleStrategy = /** @class */ (function () {
    function PassportGoogleStrategy() {
        this.initialize();
    }
    PassportGoogleStrategy.prototype.initialize = function () {
        passport_1.default.use(new GoogleStrategy({
            clientID: globals_1.default.googleOAuth.clientID,
            clientSecret: globals_1.default.googleOAuth.clientSecret,
            callbackURL: "/api/auth/google/callback"
        }, function (accessToken, refreshToken, profile, done) {
            process.nextTick(function () {
                var _user_google = user_1.UserModel.schema.statics.defaultObject();
                _user_google.googleId = profile.id;
                _user_google.firstName = profile.name.givenName;
                _user_google.lastName = profile.name.familyName;
                _user_google.email = profile.emails[0].value;
                _user_google.profileImage = profile.photos[0].value;
                user_1.UserModel.findOne({ email: _user_google.email }).exec(function (err, doc) {
                    if (err) {
                        return done(null, err);
                    }
                    else if (doc) {
                        return done(null, doc);
                    }
                    else {
                        user_1.UserModel.create(_user_google, (function (err, doc) {
                            if (err) {
                                return done(null, err);
                            }
                            else {
                                return done(null, doc);
                            }
                        }));
                    }
                });
            });
        }));
    };
    return PassportGoogleStrategy;
}());
exports.PassportGoogleStrategy = PassportGoogleStrategy;
