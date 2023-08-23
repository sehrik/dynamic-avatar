const mongoose = require('mongoose');
// const config = require("../../config.json");
const connectDb = ()=>{

    const dbUser = process.env.DB_USER;
    const dbPass = process.env.DB_PASS;

    const url = `mongodb+srv://${dbUser}:${dbPass}@cluster0.erqsl.mongodb.net/avatar?retryWrites=true&w=majority`;

    // const {url1,url2,url3} = config.db;
    mongoose.connect(url).then(()=>console.log(`connected to DB`)).catch(err => console.log("couldn't connect to db"));
};


module.exports = {connectDb};

