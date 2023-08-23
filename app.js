console.clear()
console.log(`Last Run : ${new Date().toLocaleTimeString()}`);
/////////
require('dotenv').config();
const Express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = Express();
const path = require('path');
const indexRouter = require('./api/routes/index.router.js');
const { syncWithJson } = require('./api/services/store.service.js');
const {store} = require('./api/db/store.js');

const PORT =  (process.env.PORT ? process.env.PORT :  3000 );

const dbPath = path.join(__dirname,'api/db/db.json');
process.env.dbpath = dbPath;
const staticFiles = path.join(__dirname,'public');
const viewPath = path.join(__dirname,'views');


app.set('view engine', 'ejs');
app.set('views',viewPath);
app.set('my_port',PORT);

//first time
syncWithJson(dbPath,store);

// app.use((req,res,next)=>{
//     console.log(req);
//     next();
// });

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

