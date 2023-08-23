const { linkModel } = require("./links.model");


const getAllLinks = async ()=>{

    try {
        const resutl = await linkModel.find({}).exec();
        return resutl;
        
    } catch (error) {

        console.error(error);
        return [];
    }
};

const addLink = async (id,url)=>{



    try {
        const result = await linkModel.create({
            id : id,
            url : url
        });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const deleteLink = async (id)=>{
    try {
        const res= await linkModel.findOneAndDelete({id : id}).exec();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = {
    getAllLinks,
    addLink,
    deleteLink
}