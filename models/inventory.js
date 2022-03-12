let mongoose = require('mongoose');

let inventoryModel = mongoose.Schema(
    {
        item:String,
        qty: Number,
        status: String,
    },
    {
        collection: "inventory"
    }

);

module.exports = mongoose.model('Inventory', inventoryModel);
