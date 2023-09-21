import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
const app = express();
// Middlewares
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors());
const api = process.env.API_VERSION;
app.get("/", (req, res, next) => {
    res.send("Hello Api!");
});
mongoose
    .connect(process.env.CONNECTION_STRING ?? "")
    .then(() => {
    console.log("The connection was successful");
    app.listen(process.env.PORT || 5000);
})
    .catch((error) => console.error(error.message));
