import mongoose from 'mongoose';
export const connectDb = ()=>{

    const dbUrl = process.env.MONGODB_URL;
    const url = dbUrl;
    mongoose.connect(url).then(()=>console.log(`connected to DB`)).catch(err => console.log("couldn't connect to db"));
};



