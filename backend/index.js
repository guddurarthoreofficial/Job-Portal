import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';


// sdah
import connectDB from "./utils/db.js"
dotenv.config();


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const corsOptions = {
    origin: "http://localhost:5153", // Fixed missing colon
    credentials: true // Fixed typo
};
app.use(cors(corsOptions));

// Test Route
app.get("/home", (req, res) => {
    return res.status(200).json({
        message:"guddu Kumar",
        sucess:"true"
    })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at Port: ${PORT}`);
});
