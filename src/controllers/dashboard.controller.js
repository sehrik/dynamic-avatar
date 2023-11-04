import { getAllLinks } from "../db/links.query.js";

export const dashboardCtrl = async (req,res)=>{
    const baseUrl = `${req.hostname}:${req.app.get('my_port')}/random`;

    const result = await getAllLinks();

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


