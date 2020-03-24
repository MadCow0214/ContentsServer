import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { uploadVideoMiddleware, uploadImageMiddleware } from "./middlewares";
import { postUpload } from "./controllers";

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.post("/upload/video", cors(), uploadVideoMiddleware, postUpload);
app.post("/upload/image", cors(), uploadImageMiddleware, postUpload);

export default app;
