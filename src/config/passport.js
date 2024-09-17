// config/passport.js
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { UserModel } from '../models/user.model.js';
import dotenv from 'dotenv';

dotenv.config();

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        (req) => {
            let token = null;
            if (req && req.signedCookies) {
                token = req.signedCookies['currentUser'];
            }
            return token;
        }
    ]),
    secretOrKey: process.env.SECRET
};

passport.use(new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
    try {
        const user = await UserModel.findById(jwt_payload.id).lean();
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
}));

export default passport;
