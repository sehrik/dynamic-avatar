import { getAllLinks } from "../db/links.query.js";

export const getRandomImage = async ()=>{
    // const listOfFiles = list; 

    const links = await getAllLinks();
    
    const guess = Math.floor(Math.random() * links.length);
    const randomImage= links[guess];
    return randomImage;
}


export const randomImageRequest =async (req,res)=>{
    const img =await getRandomImage();
    if(img){
        // console.log(img);
        const {url }= img;
        // return res.json(img);
        return res.redirect(url);
    }

    return res.redirect(`https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png`);
}
