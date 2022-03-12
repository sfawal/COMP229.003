// File name: models/user.js
// Student name: Syeda Fawal
// Student Id: 301155522
// Date: March 12, 2022

let mongoose = require('mongoose');
let crypto = require('crypto');

//collection of items that will be recorded in business list
//Create model class
let UserSchema = mongoose.Schema(
    {
        firstName:String,
        lastName:String,
        email: {
            type: String,
            match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
        },
        username: {
            type: String,
            unique: true,
            required: 'Username is required',
            trim: true
        },
        password: {
            type: String,
            validate: [(password) => {
                return password && password.length > 6;
            }, 'password should be longer']
        },
        salt: String,
        created: {
            type: Date,
            default:Date.now
        }
    },
    {
        collection: "user"
    }

);

UserSchema.virtual('fullName')
    .get(function(){
        return this.firstName + ' ' + this.lastName;
    })
    .set(function(fullName){
        let splitName = fullName.split(' ');
        this.firstName = splitName[0] || '';
        this.lastName = splitName[1] || '';
});

// Middleware pre & password is encrypted here
UserSchema.pre('save', function(next) {
    if (this.password) { 
        this.salt = Buffer.from(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

// Middleware post
UserSchema.post('save', function(next){
    console.log('The user "' + this.username +  '" details were saved.');
});

UserSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};


module.exports = mongoose.model('user', UserSchema);
