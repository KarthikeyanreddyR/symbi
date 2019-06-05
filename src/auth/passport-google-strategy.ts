import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
export class PassportGoogleStrategy {
    constructor() {
        this.initialize();
    }

    private initialize() {
        passport.use(new GoogleStrategy({
            clientID: '801049584077-jn5behjsk32e2sui9hlb3nsje5frkg2a.apps.googleusercontent.com',
            clientSecret: 'HduVCVPsD8TJ0o7Jj4KZuDnJ',
            callbackURL: "/auth/google/callback"
          },
          function(accessToken: any, refreshToken: any, profile: any, cb: any) {
            console.log(profile);
          }
        ));
    }
}