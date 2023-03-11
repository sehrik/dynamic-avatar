console.clear()
console.log(`Last Run : ${new Date().toLocaleTimeString()}`);
/////////
const https = require('https');
const path = require('path');
require('dotenv').config();
const Express = require('express');
const app = Express();
const PORT =  (process.env.LOCAL==1 ? process.env.PORT :  process.env.PORT );
const Domain = (process.env.LOCAL == 1 ? process.env.LOCAL_DOMAIN :  process.env.REMOTE_DOMAIN );

// static images
app.use('/random',Express.static(path.join(__dirname,'assets')));

//random image route
const randomImage = require('./api/routes/randomPhoto.route');

app.get('/home',(req,res)=>{ res.send(`Welcome Home!`) });

app.use('/',randomImage);

app.listen(PORT,()=>{console.log(`Running at : ${Domain}:${PORT}`) });