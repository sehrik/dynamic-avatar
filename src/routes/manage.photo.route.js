import { Router } from "express";
import {addUrl,deleteUrl} from '../controllers/manage.controller.js'

export const manageRouter = Router();

manageRouter.post('/',addUrl);
manageRouter.get('/delete/:id',deleteUrl);
