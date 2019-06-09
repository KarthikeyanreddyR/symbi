import passport from "passport";
import { UserModel, IUserSchema } from "../models/user";
const LocalStrategy = require("passport-local").Strategy;

export class PassportLocalStrategy {
    constructor() {
        this.initialize();
    }

    private initialize() {
        passport.use(new LocalStrategy({ usernameField: "email" }, (email: string, password: string, done: any) => {
            process.nextTick(() => {
                UserModel.findOne({ email: email }, function (
                    err: any,
                    user: IUserSchema
                ) {
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
        }
        )
        );
    }
}
