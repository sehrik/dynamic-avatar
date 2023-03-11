

// const listOfFiles = [
//     "https://images2.imgbox.com/5d/be/lbRLHRzA_o.jpg",
//     "https://images2.imgbox.com/19/8b/ltzYHTVL_o.jpg",
//     "https://images2.imgbox.com/14/45/VZ02uE9y_o.jpg",
//     "https://images2.imgbox.com/a8/0b/Bs0WKJs2_o.jpg",
//     "https://images2.imgbox.com/ab/51/KyQWTFGF_o.jpg"
// ];
const {list} = require('./list.json');

const getRandomImage = ()=>{
    const listOfFiles = list; 
    const guess = Math.floor(Math.random() * listOfFiles.length);
    const randomImage= listOfFiles[guess];
    return randomImage;
}
module.exports = {
    getRandomImage
}