import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import dbConnection from './dbConfig/dbConnection.js';
import router from "./routes/index.js";
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8800;

dbConnection();

app.use(cors());
app.use(xss());
app.use(mongoSanitize());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));


app.use(router);


<<<<<<< HEAD
app.get('/',(req,res)=>{
    res.send("asdfghjk");
});
=======
>>>>>>> f2311a472c039aa891209fbcd566aa65d1b48518

app.post('/',(req,res)=>{
    res.send("hello from govolunteer!!");
});

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});
