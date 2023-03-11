const express = require('express');
const { getRandomImage } = require('../controllers/listImages.controller');
const router = express.Router();
router.get('/',(req,res)=>{
    const result = getRandomImage();
    res.redirect(result);
})

module.exports = router;