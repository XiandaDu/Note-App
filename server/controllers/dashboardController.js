const Notes = require('../models/Notes')
const mongoose = require('mongoose')


exports.dashboard = async(req, res) => {
    let perPage = 12
    let page = req.query.page || 1

    const locals = {
        title: "Dashboard",
        description: "This is a Dashboard"
    }

    try {
        // Mongoose "^7.0.0 Update
        const notes = await Notes.aggregate([
          { $sort: { updatedAt: -1 } },
          { $match: { user: new mongoose.Types.ObjectId(req.user.id) } },
          {
            $project: {
              title: { $substr: ["$title", 0, 30] },
              body: { $substr: ["$body", 0, 150] },
            },
          }
          ])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec(); 
    
        const count = await Notes.countDocuments();
    
        res.render('dashboard', {
          userName: req.user.firstName,
          locals,
          notes,
          layout: "../views/layouts/dashboard",
          current: page,
          pages: Math.ceil(count / perPage)
        });
    } catch (error) {
        console.log(error);
    }
}




exports.dashboardViewNote = async(req, res) => {
    const note = await Notes.findById({ _id: req.params.id }).where({ user: req.user.id }).lean()
    if(note){
        res.render('view-notes', {
            noteID: req.params.id,
            note,
            layout: '../views/layouts/dashboard'
        })
    }else{
        res.send("Something went wrong.")
    }
}

exports.dashboardUpdateNote = async(req, res) => {
    try{
        await Notes.findOneAndUpdate(
            { _id: req.params.id },
            { title: req.body.title, body: req.body.body },
            ).where({ user: req.user.id })
            res.redirect('/dashboard')
    }catch(e){
        console.log(e)
    }
}

exports.dashboardDeleteNote = async (req, res) => {
    try {
        await Notes.deleteOne({ _id: req.params.id }).where({ user: req.user.id });
        res.redirect("/dashboard");
    } catch (error) {
        console.log(error);
    }
  };


exports.dashboardAddNote = async (req, res) => {
    res.render('add', {
      layout: '../views/layouts/dashboard',
    });
  };