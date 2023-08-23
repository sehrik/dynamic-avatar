const { store } = require("../db/store");
const { getAllUrl } = require("./manage.controller");


const dashboardCtrl = (req,res)=>{
    // console.log(req.cookies);

    const baseUrl = `${req.hostname}:${req.app.get('my_port')}/random`
    // console.log(req.ip,'=',req.hostname)
    const {lastUpdate} = store.getStore;
    const _D = new Date(lastUpdate);
    const timeStr = _D.toLocaleDateString()+ " - " + _D.toLocaleTimeString();
    const urlList = store.avatarList;
    return  res.render('dashboard',
    {
        urlList : urlList,
        lastUpdate : timeStr,
        endpoint: baseUrl
    });
 };


 module.exports = {
    dashboardCtrl
 }