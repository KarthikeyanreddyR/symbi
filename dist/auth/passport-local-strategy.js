"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var user_1 = require("../models/user");
var LocalStrategy = require("passport-local").Strategy;
var PassportLocalStrategy = /** @class */ (function () {
    function PassportLocalStrategy() {
        this.initialize();
    }
    PassportLocalStrategy.prototype.initialize = function () {
        passport_1.default.use(new LocalStrategy({ usernameField: "email" }, function (email, password, done) {
            process.nextTick(function () {
                user_1.UserModel.findOne({ email: email }, function (err, user) {
                    if (err) {
                        return done(err);
                    }
                    if (!user) {
                        return done(null, false);
                    }
                    if (!user.validatePassword(password)) {
                        return done(null, false);
                    }
                    return done(null, user);
                });
            });
        }));
    };
    return PassportLocalStrategy;
}());
exports.PassportLocalStrategy = PassportLocalStrategy;
