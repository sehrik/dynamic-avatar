const { getAllLinks } = require("../db/links");


const getRandomImage = async ()=>{
    // const listOfFiles = list; 

    const links = getAllLinks;
    
    const guess = Math.floor(Math.random() * links.length);
    const randomImage= links[guess];
    return randomImage;
}


const randomImageRequest = (req,res)=>{
    const img = getRandomImage();
    if(img){
        // console.log(img);
        const url = img;
        // return res.json(img);
        return res.redirect(url);
    }

    return res.redirect(`https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png`);
}

module.exports = {
    getRandomImage,
    randomImageRequest
}