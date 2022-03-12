let mongoose = require('mongoose');

//Connect to your model
let inventory = require('../models/inventory');

exports.list = function(req, res, next){
    inventory.find((err, inventoryList) => {

        if(err){
            return console.error(err);
        }
        else{
            console.log(inventoryList);
        }

    })
}
