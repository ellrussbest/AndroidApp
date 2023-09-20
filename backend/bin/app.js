import express from "express";
const app = express();
app.get("/", (req, res, next) => {
    res.send("wtf");
});
app.listen(3000, () => console.log("Server is now running"));
