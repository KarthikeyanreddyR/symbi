import passport from 'passport';
import { UserModel } from '../models/user';
import { IUser } from '../interfaces/IUser';
import globalConfig from '../config/globals';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
export class PassportGoogleStrategy {
    constructor() {
        this.initialize();
    }

    private initialize() {
        passport.use(new GoogleStrategy({
            clientID: globalConfig.googleOAuth.clientID,
            clientSecret: globalConfig.googleOAuth.clientSecret,
            callbackURL: "/api/auth/google/callback"
        },
            function (accessToken: any, refreshToken: any, profile: any, done: any) {
                process.nextTick(() => {
                    let _user_google: IUser = UserModel.schema.statics.defaultObject();
                    _user_google.googleId = profile.id;
                    _user_google.firstName = profile.name.givenName;
                    _user_google.lastName = profile.name.familyName;
                    _user_google.email = profile.emails[0].value;
                    _user_google.profileImage = profile.photos[0].value;
                    UserModel.findOne({ email: _user_google.email }).exec((err: any, doc: IUser) => {
                        if (err) {
                            return done(null, err);
                        } else if (doc) {
                            return done(null, doc);
                        } else {
                            UserModel.create(_user_google, ((err: any, doc: IUser) => {
                                if (err) {
                                    return done(null, err);
                                } else {
                                    return done(null, doc);
                                }
                            }));
                        }
                    });
                });

            }
        ));
    }

}