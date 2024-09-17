import express from 'express';
import dotenv from 'dotenv';
import router from '../routes/index.js';
import { __dirname } from '../utils.js';
import { connectionDB } from '../mongo/connection.js';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import '../config/passport.js'; 

export const AppInit = (app) => {
    dotenv.config();
    connectionDB();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser(process.env.COOKIE_SECRET)); 
    app.use(passport.initialize());
    
    app.use('/', router);
}

connectionDB();