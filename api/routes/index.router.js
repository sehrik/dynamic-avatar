const {Router} = require('express');
const indexRouter = Router();


const manageRouter = require('./manage.photo.route');
const randomRouter = require('./randomPhoto.route');

const { checkAuth } = require('../middleware/auth.middleware');
const { handleLogin } = require('../controllers/login.controller');
const { dashboardCtrl } = require('../controllers/dashboard.controller');


//free routes

indexRouter.use(`/random`,randomRouter);
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

module.exports = indexRouter;