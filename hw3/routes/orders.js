// Anish Karumuri
var express = require('express');
var router = express.Router();
var db = require('../routes/dbms_promise.js'); 



router.post('/', function(req, res, next) {
    const selectedMonth = req.body.month;

    db.dbquery(`SELECT TOPPING, QUANTITY FROM ORDERS WHERE MONTH = '${selectedMonth}'`)
        .then(results => {
            console.log(`Number of orders for ${selectedMonth}:`, results);

            // Extracting data 
            const extractedResults = results.map(row => ({
                topping: row.TOPPING,
                quantity: row.QUANTITY
            }));

            // Send back the processed results 
            res.json(extractedResults);
        })
        .catch(error => {
            console.error("Failed to query the database:", error);
            res.status(500).send('Database query failed');
        });
});

// router.get('/', function(req, res, next) {
//   res.json(orders);
// });

module.exports = router;