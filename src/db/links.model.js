// const { Schema,model } = require("mongoose");
import { Schema,model } from "mongoose";

const linksSchema = new Schema({

    id : String,
    url : String

},{
    timestamps:true
});

export const linkModel = model('link',linksSchema);
