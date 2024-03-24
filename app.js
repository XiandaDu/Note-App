require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db')

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//connect to databse
connectDB()

// Static Files
app.use(express.static('public'))

//Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

//Route
app.use('/', require('./server/routes/index'))
app.use('/', require('./server/routes/dashboard'))

//By default it will look for 404.ejs under view folder
app.get('*', function(req, res){
    res.status(404).render('404')
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})