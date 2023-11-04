
console.clear()
console.log(`Last Run : ${new Date().toLocaleTimeString()}`);
/////////
import dotenv from 'dotenv';
import { connectDb } from './src/db/db.js';
dotenv.config({
    path:'./.env'
});
connectDb();
import Express from 'express'

import cors from 'cors'
import cookieParser from 'cookie-parser';
import path from 'node:path';
import { indexRouter } from './src/routes/index.router.js';
import { fileURLToPath } from 'node:url';
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const PORT =  (process.env.PORT ? process.env.PORT :  3000 );

const staticFiles = path.join(__dirname,'src','public');
const viewPath = path.join(__dirname,'src','views');


const app = Express();
app.set('view engine', 'ejs');
app.set('views',viewPath);
app.set('my_port',PORT);

//middle wares
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));


app.use('/public',Express.static(staticFiles));
app.use(cookieParser());
// app.use(bodyParser());
app.use(cors());
//index route
app.use('/',indexRouter);

app.listen(PORT,()=>{console.log(`Running at : ${"localhost"}:${PORT}`) });
