import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.routes.js";

const app = express();
dotenv.config();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);

//db called
connectDB();

const PORT = process.env.PORT || 3000;

//apis
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
