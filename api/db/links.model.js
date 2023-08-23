const { Schema,model } = require("mongoose");

const linksSchema = new Schema({

    id : String,
    url : String

},{
    timestamps:true
});

const linkModel = model('link',linksSchema);

module.exports = {
    linkModel
};