const { Router } = require("express");
const {addUrl,deleteUrl} = require("../controllers/manage.controller");



const manageRouter = Router();

manageRouter.post('/',addUrl);
manageRouter.get('/delete/:id',deleteUrl);

module.exports = manageRouter;