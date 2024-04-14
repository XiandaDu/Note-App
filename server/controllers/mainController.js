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

exports.feature = async(req, res) => {
    const locals = {
        title: "Features of this Note App",
        description: [
            "1. User registration and login functionality",
            "2. Create, edit, and delete notes",
            "3. Ability to search notes",
            "4. Note sharing functionality, such as sharing notes with other users"
        ]
    }
    res.render('feature', locals)
}

exports.faqs = async(req, res) => {
    const locals = {
        title: "Frequently Asked Questions",
        faqs: [
            {
              "question": "How do I register for an account?",
              "answer": "To register for an account, click on the 'Sign Up' link on the homepage and it will instantly guide you to the Google login page."
            },
            {
              "question": "How do I search for specific notes?",
              "answer": "You can search for specific notes using the search bar located at the top of the app. Simply enter keywords or phrases related to the note you're looking for, and the app will display the title of relevant results."
            },       
            {
                "question": "Is there a way to recover deleted notes?",
                "answer": "No, once the note is deleted. It can no longer be recovered. "
            },
        ]
    }
    res.render('faqs', locals)
}