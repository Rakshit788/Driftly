const mongoose = require('mongoose');

const dbpassword  = process.env.MONGO_URL ;
function connectToDb() {
    mongoose.connect(dbpassword
    ).then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log('db error '));
}


module.exports = connectToDb;