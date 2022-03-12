// File name: db.js
// Student name: Syeda Fawal
// Student Id: 301155522
// Date: March 12, 2022

//For production enviorment never expose your connection string. 
let URI = "mongodb+srv://dbadmin:CgR1z4e8EgdUHbrr@clusters003.yde1q.mongodb.net/mydb?retryWrites=true&w=majority"

//Database setup
let mongoose = require('mongoose');

module.exports = function(){

    //Connect to Database
    mongoose.connect(URI);

    let mongoDB = mongoose.connection;
    
    mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
    mongoDB.once('open', ()=>{
        console.log('Connected to MongoDB...');
    });

    return mongoDB;

}