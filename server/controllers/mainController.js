//GET the root route
exports.homepage = async(req, res) => {
    const locals = {
        title: "ExpressJS Note App",
        description: "This is a Notes App developed in ExpressJS/NodeJS/EJS"
    }
    res.render('index', {locals, layout: '../views/layouts/front-page'})
}

exports.about = async(req, res) => {
    const locals = {
        title: "About ExpressJS Note App",
        description: "This is a Notes App developed in ExpressJS/NodeJS/EJS"
    }
    res.render('about', locals)
}