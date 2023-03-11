const express = require('express');
const { getRandomImage } = require('../controllers/listImages.controller');
const router = express.Router();
const Domain = (process.env.LOCAL ? process.env.LOCAL_DOMAIN :  process.env.REMOTE_DOMAIN );
const PORT =  (process.env.LOCAL ? process.env.PORT :  process.env.PORT );
//link : http://localhost:23423/random/images/016.jpg

router.get('/',(req,res)=>{
    const result = getRandomImage();
    
    const link = `${Domain}:${PORT}/random/images/${result}`;
    res.redirect(link);
})


module.exports = router;