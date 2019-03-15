import path from "path";
import express from "express";
//middlewares
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import session from "express-session";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
//import MongoStore from "connect-mongo";
//routes
import routes from "./routes";
import errorhandler from "errorhandler";

const isProduction = process.env.NODE_ENV === "production";
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: false
  })
);

app.use(routes);

export default app;
