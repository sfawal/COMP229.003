// File name: controllers/inventory.js
// Student name: Syeda Fawal
// Student Id: 301155522
// Date: March 12, 2022

let mongoose = require('mongoose');

// Connect to our model
let Inventory = require('../models/inventory');

exports.list = function(req, res, next) {
    Inventory.find( (err, inventoryList) => {

        if(err){
            return console.error(err);
        }
        else{
            // console.log(inventoryList);
            res.render(
                'inventory/list', 
                { 
                    title: 'Business Contacts List',
                    InventoryList: inventoryList
                }
            );
        }

    })
}

module.exports.displayAddPage = (req, res, next) => {
    
    let newItem = Inventory();

    res.render(
        'inventory/update', 
        {
            title: 'Add a new Contact',
            item: newItem
        }
    )          
}


module.exports.processAddPage = (req, res, next) => {
    
    let newItem = Inventory({
        _id: req.body.id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
    });

    Inventory.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/inventory/list');
        }
    });
}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Inventory.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render(
                'inventory/update', 
                {
                    title: 'Update Contact', 
                    item: itemToEdit
                }
            )
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Inventory({
        _id: req.body.id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
    });

    // console.log(updatedItem);

    Inventory.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/inventory/list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Inventory.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/inventory/list');
        }
    });
}
