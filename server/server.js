const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const morgan = require("morgan");

const { connectToMongoDB } = require("./db/db.connect");
const userRouter = require("./routes/user.route");

const app = express();

app.use(express.json()); // can use this too instead of body-parser
app.use(express.urlencoded({ extended: true })); // support encoded bodies
app.use(cookieParser());
app.use(morgan("tiny"));

const whitelist = [""];

const corsOptions = {
    origin: whitelist,
    optionsSuccessStatus: 200,
    credentials: true,
};

if (process.env.NODE_ENV === "development") {
    app.use(cors({ origin: true, credentials: true }));
} else {
    app.use(cors(corsOptions));
}

connectToMongoDB();

app.use("/user", userRouter);

app.use((req, res) => {
    res.status(404).json({
        message: "Error: No match for API endpoint",
    });
});

app.listen(process.env.PORT, () =>
    console.log(`Listening on port ${process.env.PORT}`)
);
