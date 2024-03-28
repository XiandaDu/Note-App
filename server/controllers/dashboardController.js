const Notes = require('../models/Notes')
const mongoose = require('mongoose')


exports.dashboard = async(req, res) => {

    try {
        await Notes.insertMany([
            {
                user: "660191e49f8caa5a5daeedd2",
                title: 'Due date of PD20',
                body: 'The due date of PD20 is on 25 March. The bonus quizes should be finished by 6th April',
                createdAt: Date.now()
            },
            {
                user: "660191e49f8caa5a5daeedd2",
                title: 'AI Learning Notes - Logical Regression',
                body: 'Logistic regression is a type of statistical model used for binary classification tasks in machine learning. It is commonly used when the dependent variable is categorical, meaning it takes on one of two possible values (e.g., 0 or 1, True or False, Yes or No).',
                createdAt: Date.now()
            },
            {
                user: "660191e49f8caa5a5daeedd2",
                title: 'AI Learning Notes - Decision Tree',
                body: 'A decision tree is a tree-like structure used for classification and regression tasks in machine learning. It partitions the input space based on the values of input features, making decisions at each node to predict the target variable at the leaf nodes. Decision trees are easy to understand and interpret, suitable for both numerical and categorical data, and robust to outliers. However, they are prone to overfitting, which can be addressed using techniques like pruning and ensemble methods.',
                createdAt: Date.now()
            },
            {                
                user: "660191e49f8caa5a5daeedd2",
                title: 'AI Learning Notes - Decision Tree',
                body:'Deep learning is a subset of machine learning focused on training artificial neural networks with multiple layers to learn complex patterns from data. It\'s characterized by deep architectures, automatic feature learning, and training through optimization algorithms like backpropagation. Deep learning has achieved state-of-the-art results in tasks like image recognition, speech recognition, and natural language processing, fueled by large-scale data and advancements in computing power.',
                createdAt: Date.now()
            }
        ])
    } catch(e){
        console.log(e)
    }

    const locals = {
        title: "Dashboard",
        description: "This is a Dashboard"
    }
    res.render('dashboard', {
        userName: req.user.firstName, 
        locals, 
        layout: '../views/layouts/dashboard'
    })
}