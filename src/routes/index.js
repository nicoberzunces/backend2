import { Router } from "express";
import { ROUTE_PATH } from "../constants/routesPath.js";
import ContactRouter from "./contacts.route.js";
const app = Router()

const contactRoute = new ContactRouter;

app.use(ROUTE_PATH.contact, contactRoute.getRouter())


export default app