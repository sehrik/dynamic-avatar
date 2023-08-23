const { store } = require("../db/store");

const getRandomImage = ()=>{
    // const listOfFiles = list; 

    const links = store.avatarList;
    
    const guess = Math.floor(Math.random() * links.length);
    const randomImage= links[guess];
    return randomImage;
}


const randomImageRequest = (req,res)=>{
    const img = getRandomImage();
    if(img){
        // console.log(img);
        const {url }= img;
        // return res.json(img);
        return res.redirect(url);
    }

    return res.redirect(`https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png`);
}

module.exports = {
    getRandomImage,
    randomImageRequest
}