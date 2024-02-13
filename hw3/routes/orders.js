var express = require('express');
var router = express.Router();

// Data for the orders
const orders = [
  { topping: 'cherry', quantity: "4" },
  { topping: 'plain', quantity: "2" },
  { topping: 'chocolate', quantity: "5" },
];

router.get('/', function(req, res, next) {
  // Using res.json() to send orders array as JSON
  res.json(orders);
});

module.exports = router;