const fs = require('fs');
const path = require('path');
const imgFolder = path.resolve(__dirname,'../../assets/images/');
const allowedFileType = ['jpg','gif','png'];

const matchExtension = (name) =>{
    // console.log(`called at : ${new Date().toLocaleTimeString()}`);
    const ext = name.slice(name.lastIndexOf('.')+1);
    const isIncluded = allowedFileType.includes(ext);
    return isIncluded;
}

const listOfFiles = fs.readdirSync(imgFolder,{withFileTypes:true}).filter( v => v.isFile && matchExtension(v.name)  );

const getRandomImage = ()=>{
    const guess = Math.floor(Math.random() * listOfFiles.length);
    const randomFile = listOfFiles[guess].name;
    return randomFile;
}

module.exports = {
    getRandomImage
}