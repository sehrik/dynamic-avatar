export const checkAuth = (req, res, next) => {
    // console.log('body=',req.body);
    const PASSWORD = process.env.PASSWORD;
    const USERNAME = process.env.DYN_USERNAME;

    // console.log('db',PASSWORD,USERNAME);

    const { name: c_name, password: c_password } = req.cookies;

    // console.log('in auth middler ware =',req.path);
    // console.log(c_name,c_password)
    if (
        !c_password ||
        !c_name ||
        c_name != USERNAME ||
        PASSWORD != c_password
    ) {
        if (req.path != "/") {
            return res.redirect("/");
        }
        req.isAuth = false;
        return next();
    }

    req.isAuth = true;
    return next();
};
