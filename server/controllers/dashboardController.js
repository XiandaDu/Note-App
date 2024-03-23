exports.dashboard = async(req, res) => {
    const locals = {
        title: "Dashboard",
        description: "This is a Dashboard"
    }
    res.render('dashboard', {locals, layout: '../views/layouts/dashboard'})
}