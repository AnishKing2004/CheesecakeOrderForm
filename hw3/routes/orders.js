// Anish Karumuri
var express = require('express');
var router = express.Router();

// Data for the orders
const orders = [
  { topping: 'Cherry', quantity: "7" },
  { topping: 'Plain', quantity: "7" },
  { topping: 'Chocolate', quantity: "7" },
];

router.post('/', function(req, res, next) {
  // Using res.json() to send orders array as JSON
  res.json(orders);
});

router.get('/', function(req, res, next) {
  res.json(orders);
});

module.exports = router;