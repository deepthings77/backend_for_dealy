    import express ,{ urlencoded} from 'express';

    import cookieParser from "cookie-parser";
    import dotenv from "dotenv";
    import cors from "cors";
    import connectDB from "./utils/db.js";
    import userRoute from "./routes/user.route.js";
    import postRoute from "./routes/post.route.js";
    import path from "path";
    import {app , server, io} from './socket/socket.js';



    dotenv.config();

    const PORT = process.env.PORT || 3000;


    //middlewares
    app.use(express.json());
    app.use(cookieParser());
    app.use(urlencoded({ extended: true }));
    const corsOptions = {
        origin: process.env.URL,
        credentials: true
    }
    app.use(cors(corsOptions));


    app.use("/api/v1/user", userRoute);
    app.use("/api/v1/post", postRoute);




    server.listen(PORT, () => {
        connectDB();
        console.log(`Server is running on port ${PORT}`);
    });