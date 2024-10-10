import cookieParser from 'cookie-parser';
import passport from '../config/passport.js';

export const AppInit = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser(process.env.COOKIE_SECRET)); 
    app.use(passport.initialize()); 
    app.use('/', router);
};
