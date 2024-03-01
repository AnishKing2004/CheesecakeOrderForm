var db = require('../routes/dbms_promise.js'); // Adjust the path as necessary

// Test 1: Check if at least one order exists
db.dbquery("SELECT COUNT(*) AS totalOrders FROM ORDERS")
    .then(results => {
        console.log("Total number of orders:", results[0].totalOrders);
        if(results[0].totalOrders > 0) {
            console.log("PASS: At least one order exists in the ORDERS table.");
        } else {
            console.log("FAIL: No orders found in the ORDERS table.");
        }
    })
    .catch(error => {
        console.error("Failed to query the database:", error);
    });

// Test 2: Count orders for 'plain' topping in February
db.dbquery("SELECT COUNT(*) AS plainFebOrders FROM ORDERS WHERE TOPPING = 'plain' AND MONTH = 'Feb'")
    .then(results => {
        console.log("Number of 'plain' cheesecake orders in February:", results[0].plainFebOrders);
    })
    .catch(error => {
        console.error("Failed to query the database for plain in Feb:", error);
    });