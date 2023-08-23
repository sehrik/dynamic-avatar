const { getAllLinks } = require("../db/links.query");




const dashboardCtrl = async (req,res)=>{
    // console.log(req.cookies);

    const baseUrl = `${req.hostname}:${req.app.get('my_port')}/random`;

    // console.log(baseUrl);
    // console.log(req.ip,'=',req.hostname)
    const result = await getAllLinks();
    // console.log('links',result);
    const lastUpdate = Date.now();
    const _D = new Date(lastUpdate);
    const timeStr = _D.toLocaleDateString()+ " - " + _D.toLocaleTimeString();
    const urlList = result;
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