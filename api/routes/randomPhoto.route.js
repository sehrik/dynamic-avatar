const express = require('express');
const {  randomImageRequest } = require('../controllers/random.controller');

const randomPhotoRouter = express.Router();


randomPhotoRouter.get('/',randomImageRequest)

module.exports = randomPhotoRouter;