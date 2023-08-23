const { getAllLinks,addLink,deleteLink } = require("../db/links.query");

const addUrl = async (req,res)=>{

    const {url} = req.body;

    // console.log(req.body)

    // console.log(url)
    if(!url){
        return res.sendStatus(400);    
    }
    if(!url.startsWith("http")){
        return res.sendStatus(400);
    }
    const id = Math.random().toString(36).slice(2);

    await addLink(id,url);

    return res.redirect('/dashboard');
};
const deleteUrl = async (req,res)=>{

    const {id : urlId} = req.params;
    if(!urlId){
        return res.sendStatus(400);    
    }
  const result =  await deleteLink(urlId);
    return res.redirect('/dashboard');
};

module.exports = {
    addUrl,
    deleteUrl
}