import { Router } from 'express';
export const indexRouter = Router();


import {manageRouter} from './manage.photo.route.js';
import {randomPhotoRouter} from './randomPhoto.route.js';
import { checkAuth } from '../middleware/auth.middleware.js';
import {handleLogin} from '../controllers/login.controller.js'

import { dashboardCtrl } from '../controllers/dashboard.controller.js';


//free routes

indexRouter.use(`/random`,randomPhotoRouter);
indexRouter.post('/login',handleLogin);
indexRouter.use(checkAuth);
indexRouter.get('/',(req,res)=>{


   if(req.isAuth){
      return res.redirect('/dashboard');
   }
   return  res.render('login.ejs',{incorrect  : true});
});

//protected routes
indexRouter.get('/dashboard',dashboardCtrl);

indexRouter.use('/manage',manageRouter);

