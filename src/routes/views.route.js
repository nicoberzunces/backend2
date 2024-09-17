import { Router } from "express";
import passport from 'passport';

const app = Router();


app.get('/login', (req, res) => {
    if (!req.signedCookies.currentUser) {
        return res.render('login');
    }
    return res.redirect('/users/current');
});


app.get('/current', 
    passport.authenticate('jwt', { session: false, failureRedirect: '/login' }), 
    (req, res) => {
        res.render('current', { user: req.user });
    }
);

export default app;
