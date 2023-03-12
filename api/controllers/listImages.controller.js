

const listOfFiles = [
    "https://64.media.tumblr.com/269288592a184920dd1dba3a26c21062/099c7f5ccf6c1dae-0b/s500x750/da46930759c24857eec469fb0fb8c2b8a2ce6e95.gifv",
    "https://media0.giphy.com/media/nfLpqTrNPpqcE/giphy.webp",
    "https://media0.giphy.com/media/DUO76cKAFAObu/giphy.webp",
    "https://media2.giphy.com/media/GFHJXPCoVQEec/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmM2ZDlkNmNmZmMyNzlmYWIwYmQ4N2E1YTVjMmE0MmUwYzA5NzM0OSZjdD1n/mXwxPJjb1SzlhwMHfd/giphy.gif",
    "https://media.giphy.com/media/PnPU9GhN3V7oVizSHG/giphy-downsized-large.gif",
    "https://media.giphy.com/media/Th49xtsrSFJVsIGtkB/giphy-downsized.gif",
    "https://media.giphy.com/media/XcAskcEyoyld03drLt/giphy-downsized.gif",
    "https://i.pinimg.com/originals/ea/70/aa/ea70aa2ea352673090fa5c5242aa4bc2.jpg"
];
// const {list} = require('./list.json');

const getRandomImage = ()=>{
    // const listOfFiles = list; 
    const guess = Math.floor(Math.random() * listOfFiles.length);
    const randomImage= listOfFiles[guess];
    return randomImage;
}
module.exports = {
    getRandomImage
}