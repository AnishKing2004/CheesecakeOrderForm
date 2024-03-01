// Anish Karumuri
var express = require('express');
var router = express.Router();
var db = require('../routes/dbms_promise.js');

router.post('/', function(req, res, next) {
    const { quantity, topping, notes } = req.body;

    // Generate a unique ORDERID
    const orderId = Math.floor(100 + Math.random() * 900); // 3-digit ID

    // Hardcoded the MONTH and DAY
    const month = "Aug";
    const day = 13;

    // Construct the INSERT statement
    const insertQuery = `INSERT INTO ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES (${orderId}, '${month}', ${day}, ${quantity}, '${topping}', '${notes}')`;

    // Execute the insertQuery using the db module
    db.dbquery(insertQuery)
        .then(result => {
            console.log("Insert result:", result);
            res.send('Order added successfully');
        })
        .catch(error => {
            console.error("Failed to insert into the database:", error);
            res.status(500).send('Failed to add order');
        });
});

module.exports = router;