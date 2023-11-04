export const handleLogin = (req, res) => {

    const PASSWORD = process.env.PASSWORD;
    const USERNAME = process.env.DYN_USERNAME;

    const { password, name } = req.body;

    if (password == PASSWORD && name == USERNAME) {
        res.cookie('name',name);
        res.cookie('password',password);
        return res.redirect("/dashboard");
    }

    return res.redirect("/");
};
