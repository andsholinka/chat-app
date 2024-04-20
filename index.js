import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './src/routes/auth.routes.js';
import messageRoutes from './src/routes/message.routes.js';
import userRoutes from './src/routes/user.routes.js';

import connectToDB from './src/config/database.js';
import {
    app,
    server
} from "./src/socket/socket.js";

const PORT = process.env.PORT || 8080;

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

server.listen(PORT, () => {
    connectToDB();
    console.log(`Server Running on port ${PORT}`);
});