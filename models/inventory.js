let mongoose = require('mongoose');

let inventoryModel = mongoose.Schema(
    {
        item:String,
        qty: Number,
        tags: [],
        status: String,
        size: {
            h: Number,
            w: Number,
            Uom:String
        }
    },
    {
        collection: "inventory"
    }

);

module.exports = mongoose.model('Inventory', inventoryModel);
