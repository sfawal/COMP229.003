// File name: models/inventory.js
// Student name: Syeda Fawal
// Student Id: 301155522
// Date: March 12, 2022

let mongoose = require('mongoose');

//collection of items that will be recorded in business list
let inventoryModel = mongoose.Schema(
    {
        item: String,
        qty: Number,
        
        status: {
            type:String,
            match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
        }
    },
    {
        collection: "inventory"
    }
);

module.exports = mongoose.model('Inventory', inventoryModel);
