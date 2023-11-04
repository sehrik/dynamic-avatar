import { Router } from 'express';
import {  randomImageRequest } from '../controllers/random.controller.js';

export const randomPhotoRouter = Router();


randomPhotoRouter.get('/',randomImageRequest)

