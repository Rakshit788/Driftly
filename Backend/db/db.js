const mongoose = require('mongoose');

const dbpassword  = 'mongodb+srv://Uber:uberpass@cluster0.bnvlk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
function connectToDb() {
    mongoose.connect(dbpassword
    ).then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log('db error '));
}


module.exports = connectToDb;