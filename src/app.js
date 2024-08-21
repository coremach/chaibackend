import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express()
const corsOption = {
    origin: process.env.CORS_ORIGIN,
    Credential : true
}

app.use(cors(corsOption))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes
import userRouter from './routes/user.routes.js';

// routes declaration
app.use("/api/v1/users",userRouter)
app.use("/uploadFile",userRouter)
// http://localhost:8000/api/v1/users/register

export default app;