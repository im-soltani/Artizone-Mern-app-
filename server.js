const express = require("express");

const connectDB = require("./config/connectDB");

const app = express();

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const profileRouter = require("./routes/profile");
const annonceRouter = require("./routes/annonce");
const annonceclRouter = require("./routes/annoncecl");
const rateRouter = require("./routes/rate");

//middleWares
app.use(express.json());

//start the server
connectDB();

//routes
app.use("/api/auth", authRouter);
app.use("/api/auth", userRouter);
app.use("/api/auth", profileRouter);
app.use("/api/auth", annonceRouter);
app.use("/api/auth", annonceclRouter);
app.use("/api/auth", rateRouter);


//lunch the Server
const port = process.env.PORT || 5001;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`The Serveris Running on port ${port}....`);
});
