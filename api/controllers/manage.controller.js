
const { store } = require("../db/store");
const { syncWithStore } = require("../services/store.service");




const addUrl = (req,res)=>{

    const {url} = req.body;

    console.log(req.body)

    console.log(url)

    
    if(!url){
        return res.sendStatus(400);    
    }
    if(!url.startsWith("http")){
        return res.sendStatus(400);
    }

    store.addAvatar(url);
    syncWithStore(process.env.dbpath,store);

    return res.redirect('/dashboard');

};
const deleteUrl = (req,res)=>{

    const {id : urlId} = req.params;
    if(!urlId){
        return res.sendStatus(400);    
    }

  const result =  store.deleteAvatar(urlId);
  if(result){

      syncWithStore(process.env.dbpath,store);
  }

    return res.redirect('/dashboard');

};

module.exports = {
    addUrl,
    deleteUrl
}